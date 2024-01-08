import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class MintConfig {
  @Prop()
  mintPrice: number;
  @Prop()
  maxPurchase: number;
  @Prop()
  name: string;
  @Prop()
  startingAt: string;
  @Prop()
  endingAt: string;
  @Prop()
  eligibleAddresses: string[];
}

@Schema()
export class Project {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  logo: string;
  @Prop()
  image: string;
  @Prop({ type: MongooseSchema.Types.ObjectId })
  organization: MongooseSchema.Types.ObjectId;
  @Prop()
  keysContractAddress: string;
  @Prop()
  boxesContractAddress: string;
  @Prop()
  chain: string;
  @Prop()
  totalSupply: number;
  @Prop()
  remainingSupply: number;
  @Prop()
  mintConfig: MintConfig[];
}

export const MintConfigSchema = SchemaFactory.createForClass(MintConfig);
export const ProjectSchema = SchemaFactory.createForClass(Project);
