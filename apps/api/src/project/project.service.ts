import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './models/project.model';
import { ProjectDto } from './dto/project';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>
  ) {}
  createProject(project: ProjectDto) {
    const projectModel = new this.projectModel(project);
    return projectModel.save();
  }

  getProjectById(id: string) {
    console.log(id, 'id');
    console.log('get project by id', this.projectModel.findById(id));
    
    return this.projectModel.findById(id);
  }

  async getAllProjects(): Promise<Project[]> {
    console.log('get all projects', await this.projectModel.find().exec());
    return await this.projectModel.find().exec();
  }
}
