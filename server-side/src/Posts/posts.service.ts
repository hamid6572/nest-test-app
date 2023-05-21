import { Inject, Injectable } from '@nestjs/common';
import { Post } from './posts.model';

export class PostsService {
  posts: Post[] = [];
  addPost(userId: number, id: number, title: string, body: string) {
    const newPost = new Post(userId, id, title, body);
    this.posts.push(newPost);
    return userId;
  }
  getPosts() {
    return this.posts;
  }
  getPost(id) {
    let post = this.posts.find((post) => post.id == id);
    let statuscode;
    if (!post) statuscode = 404;
    else statuscode = 200;
    let newpost = {
      ...post,
      statusCode: statuscode,
    };
    return newpost;
  }
}
