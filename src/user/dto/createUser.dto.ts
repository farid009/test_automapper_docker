import { IsNotEmpty, IsArray } from 'class-validator';
import { AutoMap } from '@nartc/automapper';

export class CreateUserDto {
  @IsNotEmpty()
  @AutoMap()
  name: string;

  @IsNotEmpty()
  @IsArray()
  @AutoMap()
  test: number[];
}
