import { Injectable, UnauthorizedException } from '@nestjs/common';

import dayjs from 'dayjs';
import { SIGN_MESSAGE } from '../utils/constants';
import { SharedService } from '../shared/shared.service';
import { AuthService } from '../auth/auth.service';
import { User } from './model/user.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private readonly sharedService: SharedService,
    private readonly authService: AuthService
  ) {}
  async authenticate(signature: string, wallet: string, unixTimestamp: number) {
    // const isValidSignature = this.sharedService.verifySignedMessage(
    //   `${SIGN_MESSAGE}${wallet}: ${unixTimestamp}`,
    //   signature,
    //   wallet
    // );

    // if (!isValidSignature)
    //   throw new UnauthorizedException('Failed to verify wallet ownership!');

    if (dayjs().diff(dayjs(unixTimestamp), 'seconds') > 60) {
      throw new UnauthorizedException();
    }

    const tokens = await this.authService.signIn(wallet);
    const user: User = new this.userModel({
      refreshToken: tokens.refresh_token,
      wallet,
    });

    const savedUser = await this.userModel.create(user);

    return { tokens, savedUser };
  }
}
