import { AutoMap } from '@nartc/automapper';

export class User {
  @AutoMap()
  id: string;

  @AutoMap()
  name: string;

  @AutoMap()
  test: number[];
}
