import { ProfileBase, Profile, AutoMapper } from 'nestjsx-automapper';
import { CreateUserDto } from './dto';
import { User } from './user.entity';

@Profile()
export class UserProfile extends ProfileBase {
  constructor(mapper: AutoMapper) {
    super();
    mapper.createMap(CreateUserDto, User);
  }
}
