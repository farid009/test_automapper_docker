import { Injectable } from '@nestjs/common';
import { InjectMapper, AutoMapper } from 'nestjsx-automapper';
import { User } from './user.entity';
import { CreateUserDto, UpdateUserDto } from './dto';
import { hash } from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectMapper()
    private mapper: AutoMapper,
  ) {}

  async add(_userObj: CreateUserDto): Promise<User> {
    const hashedPassword = await hash(_userObj.password);

    _userObj.password = hashedPassword;

    const userObj = this.mapper.map(_userObj, User, CreateUserDto);

    return userObj;
  }
}
