import { IsNumber, IsString } from 'class-validator';

export class SignInDto {
  @IsString()
  wallet: string;
  @IsString()
  message: string;
  @IsString()
  signedMessage: string;
  @IsString()
  nonce: string;
  @IsNumber()
  unixTimestamp: number;


}
