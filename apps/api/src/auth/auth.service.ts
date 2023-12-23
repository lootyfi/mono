import {
  BadRequestException,
  Body,
  Injectable,
  NotFoundException,
  Post,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import dayjs from 'dayjs';
import { Model } from 'mongoose';
import { User, UserRole } from '../user/model/user.model';

import { SharedService } from '../shared/shared.service';
import { SIGN_MESSAGE } from '../utils/constants';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectModel(User.name) private model: Model<User>,
    private sharedService: SharedService
  ) {}
  private async signIn(wallet: string) {
    const payload = { wallet, loggedAt: dayjs().unix(), role: UserRole.User };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '10m',
        secret: this.configService.get('JWT_SECRET'),
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
        secret: this.configService.get('JWT_SECRET'),
      }),
    };
  }

  async refreshToken(refreshToken: string) {
    try {
      const user = await this.model.findOne({ refreshToken });
      if (!user) throw new UnauthorizedException('Non existing refresh token!');
      const isValid = await this.jwtService.verifyAsync(refreshToken);
      if (!isValid)
        throw new UnauthorizedException(
          'Refresh token expired. Please login again!'
        );

      const payload = {
        wallet: user.wallet,
        loggedAt: dayjs().unix(),
        role: UserRole.User,
      };

      const access_token = await this.jwtService.signAsync(payload, {
        expiresIn: '10m',
      });

      return { access_token, refreshToken };
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async authenticate(signature: string, wallet: string, unixTimestamp: number) {
    const isValidSignature = this.sharedService.verifySignedMessage(
      `${SIGN_MESSAGE}${wallet}: ${unixTimestamp}`,
      signature,
      wallet
    );

    if (!isValidSignature)
      throw new UnauthorizedException('Failed to verify wallet ownership!');

    if (dayjs().diff(dayjs(unixTimestamp), 'seconds') > 60) {
      throw new UnauthorizedException();
    }

    const tokens = await this.signIn(wallet);
    const user: User = new this.model({
      refreshToken: tokens.refresh_token,
      wallet,
    });

    const savedUser = await this.model.create(user);

    return { tokens, savedUser };
  }

  async login(wallet: string, signature: string, unixTimestamp: number) {
    try {
      const user = await this.model.findOne({ wallet });
      if (!user) return new NotFoundException('User does not exist!');

      const isValidSignature = this.sharedService.verifySignedMessage(
        `${SIGN_MESSAGE}${wallet}: ${unixTimestamp}`,
        signature,
        wallet
      );

      if (!isValidSignature)
        return new UnauthorizedException('Failed to verify wallet ownership!');

      return this.signIn(wallet);
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}
