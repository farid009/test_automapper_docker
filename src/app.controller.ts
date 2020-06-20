import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { UserRoDto } from './user/dto';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<User> {
    return await this.userService.add({
      name: 'farid',
      phone: '09123456789',
      email: 'farid@farid.com',
      emailConfirm: true,
      password: 'faridtest',
    });
  }
}
