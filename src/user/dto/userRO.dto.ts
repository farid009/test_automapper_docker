import { AutoMap } from '@nartc/automapper';

export class UserRoDto {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  email: string;

  @AutoMap()
  phone: string;
}
