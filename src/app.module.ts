import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { PostsService } from './posts/posts.service';
import { PostsController } from './posts/posts.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [],
  controllers: [AppController, PostsController, UsersController],
  providers: [AppService, UsersService, PostsService],
})
export class AppModule {}
