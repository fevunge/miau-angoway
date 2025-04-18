import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsController } from './posts/posts.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController, UsersController],
  providers: [AppService],
})
export class AppModule {}
