import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { userProviders } from './user.provider';
import './user.profile';

@Module({
  imports: [],
  providers: userProviders,
  exports: [UserService],
})
export class UserModule {}
