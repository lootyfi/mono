import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Project {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  image: string;
  @Prop({ type: MongooseSchema.Types.ObjectId })
  organization: MongooseSchema.Types.ObjectId;
  @Prop()
  keysContractAddress: string;
  @Prop()
  boxesContractAddress: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
