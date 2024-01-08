import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { Role } from '../decorators/role.decorator';
import { AuthGuard } from '../guards/auth.guard';
import { UserRole } from '../user/model/user.model';
import { ProjectService } from './project.service';
import { ProjectDto } from './dto/project';

@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post('/create')
  @UseGuards(AuthGuard)
  @Role(UserRole.Admin)
  createProject(@Body() project: ProjectDto) {
    return this.projectService.createProject(project);
  }

  @Get('/get')
  getAllProjects() {
    console.log('get all projects', this.projectService.getAllProjects());
    
    return this.projectService.getAllProjects();
  }

  @Get('/get/:id')
    getProjectById(@Param() params: { id: string }) {
    console.log(params.id, 'id');
    
    console.log('get project by id', this.projectService.getProjectById(params.id));
    
    return this.projectService.getProjectById(params.id);
  }
}
