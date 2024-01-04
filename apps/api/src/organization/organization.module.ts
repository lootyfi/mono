import { Module } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { Organization, OrganizationSchema } from './models/organization';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from '../auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    AuthModule,
    MongooseModule.forFeature([{ name: Organization.name, schema: OrganizationSchema }]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService, JwtService, ConfigService],
})
export class OrganizationModule {}
