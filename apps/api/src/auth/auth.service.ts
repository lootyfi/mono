import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import dayjs from 'dayjs';
import { Model } from 'mongoose';
import { User, UserRole } from '../user/model/user.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    @InjectModel(User.name) private model: Model<User>
  ) {}
  async signIn(wallet: string) {
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
}
