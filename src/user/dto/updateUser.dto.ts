import { IsOptional, IsEmail, MinLength } from 'class-validator';
import { AutoMap } from '@nartc/automapper';

export class UpdateUserDto {
  @IsOptional()
  @AutoMap()
  name?: string;

  @IsOptional()
  @IsEmail()
  @AutoMap()
  email?: string;

  @IsOptional()
  @IsEmail()
  @AutoMap()
  emailConfirm?: boolean;

  @IsOptional()
  @AutoMap()
  phone?: string;

  @IsOptional()
  @MinLength(5)
  @AutoMap()
  password?: string;
}
