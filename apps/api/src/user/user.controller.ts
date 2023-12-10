import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { SignInDto } from './dto/signin.dto';
import { UserService } from './user.service';
import { Request, Response } from 'express';
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signin')
  async signIn(@Body() signinUserDto: SignInDto, @Res() response: Response) {
    const { savedUser, tokens } = await this.userService.authenticate(
      signinUserDto.signature,
      signinUserDto.wallet,
      signinUserDto.unixTimestamp
    );

    response.cookie('access_token', tokens.access_token);
    response.cookie('refresh_token', tokens.refresh_token);

    return response
      .status(200)
      .json({ message: 'Successfully authenticated', data: savedUser });
  }
}
