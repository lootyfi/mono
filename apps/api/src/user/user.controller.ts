import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';
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
}
