import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from './models/project.model';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<Project>
  ) {}
  createProject() {}

  getProjectById(id: string) {
    return this.projectModel.findById(id);
  }

  getAllProjects() {
    return this.projectModel.find();
  }
}
