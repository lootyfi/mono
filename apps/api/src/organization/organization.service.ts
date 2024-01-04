import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from './models/organization';
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class OrganizationService {
  constructor(
    @InjectModel(Organization.name) private organizationModel: Model<Organization>
  ) {}
  createOrganization({name, description, image}) {
    const organization = new this.organizationModel({
      _id: uuidv4(),
      name: name,
      description: description,
      image: image,
    });
    return organization.save();
  }

  // getProjectById(id: string) {
  //   return this.projectModel.findById(id);
  // }

  // getAllProjects() {
  //   return this.projectModel.find();
  // }
}
