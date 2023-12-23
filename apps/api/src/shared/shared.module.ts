import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SharedService } from './shared.service';

@Module({
  providers: [SharedService, ConfigService],
  exports: [SharedService],
})
export class SharedModule {}
