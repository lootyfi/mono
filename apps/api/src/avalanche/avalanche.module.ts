import { Module } from '@nestjs/common';
import { AvalancheService } from './avalanche.service';
import { AvalancheController } from './avalanche.controller';
import { ProjectModule } from '../project/project.module';

@Module({
  imports: [ProjectModule],
  controllers: [AvalancheController],
  providers: [AvalancheService],
})
export class AvalancheModule {}
