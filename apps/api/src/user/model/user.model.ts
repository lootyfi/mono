import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class User {
  @Prop()
  wallet: string;
  @Prop()
  refreshToken: string;
}
