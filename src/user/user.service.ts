import { Injectable } from '@nestjs/common';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { User } from './user.entity';
import { CreateUserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    @InjectMapper()
    private mapper: AutoMapper,
  ) {}

  async add(_userObj: CreateUserDto): Promise<User> {
    const userObj = this.mapper.map(_userObj, User, CreateUserDto);

    return userObj;
  }
}
