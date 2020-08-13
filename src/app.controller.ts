import { Controller, Get } from '@nestjs/common';
import { UserService } from './user/user.service';
import { User } from './user/user.entity';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getHello(): Promise<User> {
    return await this.userService.add({
      name: 'farid',
      test: [-45, 67],
    });
  }
}
