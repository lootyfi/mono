import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
// import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Organization {
  @Prop({ unique: true })
  _id: string;
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  image: string;

}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
