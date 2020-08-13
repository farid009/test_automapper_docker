import { Module } from '@nestjs/common';
import { AutomapperModule } from 'nestjsx-automapper';
import { appProviders } from './app.provider';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    AutomapperModule.withMapper({ skipUnmappedAssertion: true }),
    UserModule,
  ],
  controllers: [AppController],
  providers: appProviders,
})
export class AppModule {}
