import { Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';

import { HomeDto } from './dto/Home.dto';
import { PostsService } from './posts.service';
import posts from './posts.json';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}
  @Post()
  addPost(): {} {
    let userId: number;
    posts.forEach((post) => {
      userId = post.userId;
      this.postsService.addPost(post.userId, post.id, post.title, post.body);
    });

    return { message: 'posts added' };
  }

  @Get('all')
  getPosts(): any {
    return this.postsService.getPosts();
  }

  @Get(':id')
  getPost(@Param('id', ParseIntPipe) id: HomeDto) {
    return this.postsService.getPost(id);
  }
}
