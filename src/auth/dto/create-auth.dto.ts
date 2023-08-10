import { IsOptional, IsString } from 'class-validator';

export class CreateAuthDto {
  @IsString()
  username: string;
  @IsOptional()
  password: string;
}
