import { Body, Controller, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from './auth.service';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  refreshToken(@Body('refreshToken') refreshToken: { refreshToken: string }) {
    return this.authService.refreshToken(refreshToken.refreshToken);
  }

  login(@Body('login') login: string) {}
}
