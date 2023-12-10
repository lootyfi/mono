import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  async signIn(wallet: string) {
    const payload = { wallet, loggedAt: dayjs().unix() };

    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '10m',
      }),
      refresh_token: await this.jwtService.signAsync(payload, {
        expiresIn: '7d',
      }),
    };
  }
}
