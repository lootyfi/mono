import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from '../guards/auth.guard';
import { AvalancheService } from './avalanche.service';
@Controller('avalanche')
export class AvalancheController {
  constructor(private readonly avalancheService: AvalancheService) {}

  @UseGuards(AuthGuard)
  @Get('mint-key/:projectId')
  async mint(@Param('projectId') projectId: string) {
    return this.avalancheService.mintKey(projectId);
  }
}
