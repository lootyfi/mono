import { IsNumber, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  wallet: string;
  @IsNumber()
  unixTimestamp: number;
  @IsString()
  signature: string;
}
