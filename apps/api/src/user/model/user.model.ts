import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}

@Schema()
export class User {
  @Prop({ unique: true })
  wallet: string;
  @Prop()
  refreshToken: string;
  @Prop({ type: String, enum: UserRole })
  role: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
