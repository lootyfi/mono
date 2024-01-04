import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { Role } from '../decorators/role.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { UserRole } from '../user/model/user.model';
import { OrganizationService } from './organization.service';
import { OrganizationDto } from './dto/organization.dto';

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  @Role(UserRole.Admin)
  createOrganization(@Body() organization: OrganizationDto) {
    return this.organizationService.createOrganization(organization);
  }
}
