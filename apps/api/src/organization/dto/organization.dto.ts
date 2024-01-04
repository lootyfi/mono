import { IsString } from 'class-validator';

export class OrganizationDto {
  @IsString()
  name: string;
  @IsString()
  description: string;
  @IsString()
  image: string;
}
