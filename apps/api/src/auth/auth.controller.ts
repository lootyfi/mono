import { Body, Controller, Post } from '@nestjs/common';

@Controller('/auth')
export class AuthController {
  @Post()
  refreshToken(@Body('refreshToken') refreshToken: { refreshToken: string }) {}
}
