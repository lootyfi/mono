import {
  // Body,
  Controller,
  Get,
  // Post,
  // Res,
  Req,
  UseGuards,
} from '@nestjs/common';

import { UserService } from './user.service';
import {
  Request,
  // Response
} from 'express';
import { AuthGuard } from '../guards/auth.guard';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/guarded')
  @UseGuards(AuthGuard)
  guardedRoute(@Req() request: Request) {
    console.log(request['user']);

    return { message: 'success' };
  }

  @Get('/me')
  // @UseGuards(AuthGuard)
  async me(@Req() request: Request) {
    const { wallet } = request['user'];
    console.log("wallet", wallet);
    
    return await this.userService.findOneByWallet(wallet);
  }
}
