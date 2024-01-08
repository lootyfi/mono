import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Organization {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  image: string;

}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
