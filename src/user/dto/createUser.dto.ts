import { IsNotEmpty, IsEmail, MinLength, IsOptional } from 'class-validator';
import { ApiHideProperty } from '@nestjs/swagger';
import { AutoMap } from '@nartc/automapper';

export class CreateUserDto {
  @IsNotEmpty()
  @AutoMap()
  name: string;

  @IsOptional()
  @IsEmail()
  @AutoMap()
  email: string;

  @IsOptional()
  @AutoMap()
  phone: string;

  @IsOptional()
  @ApiHideProperty()
  @AutoMap()
  emailConfirm: boolean;

  @IsNotEmpty()
  @MinLength(5)
  @AutoMap()
  password: string;
}
