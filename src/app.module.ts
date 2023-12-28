import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userController } from './user.controller';
import { userService } from './user.service';

@Module({
  imports: [],
  controllers: [AppController,userController],
  providers: [AppService,userService],
})
export class AppModule {}
