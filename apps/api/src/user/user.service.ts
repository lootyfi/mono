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
}
