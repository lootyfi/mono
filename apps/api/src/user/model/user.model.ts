import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Schema()
export class User {
  @Prop()
  wallet: string;
  @Prop()
  refreshToken: string;
  @Prop({ type: UserRole })
  role: UserRole;
}
