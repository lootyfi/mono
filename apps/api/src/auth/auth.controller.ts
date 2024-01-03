import { Body, Controller, Post,  Res } from '@nestjs/common';

import { SignInDto } from './dto/signin.dto';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('refresh_token')
  refreshToken(@Body() refreshToken: { refreshToken: string }) {
    return this.authService.refreshToken(refreshToken.refreshToken);
  }

   @Post('/login')
  login(@Body() loginDto: SignInDto) {
    return this.authService.login(
      loginDto.wallet,
      loginDto.message,
      loginDto.signedMessage,
      loginDto.nonce,
      loginDto.unixTimestamp,
    );
  }

  @Post('/signin')
  async signIn(@Body() signinUserDto: SignInDto, @Res() response: Response) {
    const { savedUser, tokens } = await this.authService.authenticate(
      signinUserDto.wallet,
      signinUserDto.message,
      signinUserDto.signedMessage,
      signinUserDto.nonce,
      signinUserDto.unixTimestamp,
    );

    response.cookie('access_token', tokens.access_token);
    response.cookie('refresh_token', tokens.refresh_token);

    console.log("savedUser", savedUser);
    console.log("tokens", tokens);
    console.log("response", response);
    
    
    

    return response
      .status(200)
      .json({ message: 'Successfully authenticated', data: savedUser });
  }
}
