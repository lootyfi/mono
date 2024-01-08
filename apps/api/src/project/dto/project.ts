import { IsArray, IsDate, IsEnum, IsNumber, IsObject, IsString } from 'class-validator';

export class MintConfigDto {
  @IsNumber()
  mintPrice: number;
  @IsNumber()
  maxPurchase: number;
  @IsString()
  name: string;
  @IsDate()
  startingAt: string;
  @IsDate()
  endingAt: string;
  @IsString()
  eligibleAddresses: string[];
}


export class ProjectDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
  @IsString()
  logo: string;
  @IsString()
  organizationId: string;
  @IsNumber()
  totalSupply: number;
  @IsString()
  keysContractAddress: string;
  @IsString()
  boxesContractAddress: string;
  @IsEnum(['SOL', 'AVAX'])
  chain: string;
  // array of mint configs
  @IsObject({ each: true })
  mintConfig: MintConfigDto[];
}

