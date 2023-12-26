import { Controller, Post, UseGuards } from '@nestjs/common';
import { Role } from '../decorators/role.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { UserRole } from '../user/model/user.model';
import { ProjectService } from './project.service';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  @Role(UserRole.Admin)
  createProject() {}
}
