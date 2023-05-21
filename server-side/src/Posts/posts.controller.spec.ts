import { Test, TestingModule } from '@nestjs/testing';
import { PostsController } from './posts.contoller';
import { PostsService } from './posts.service';

describe('AppController', () => {
  jest.mock('./posts.service');

  let postsController: PostsController;
  let postsService: PostsService;
  //const fn = jest.spyOn(postsService, 'getPosts');

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: postsService,
      useFactory: () => ({
        addPosts: jest.fn(() => []),
        getPosts: jest.fn(() => []),
        getPost: jest.fn(() => {}),
      }),
    };

    const app: TestingModule = await Test.createTestingModule({
      controllers: [PostsController],
      providers: [PostsService],
    }).compile();

    postsController = app.get<PostsController>(PostsController);
    postsService = app.get<PostsService>(PostsService);
  });
  describe('root', () => {
    it('should return posts', () => {
      const addPostSpy = jest.spyOn(postsController, 'addPost');
      expect(addPostSpy).toBeDefined();
    });
    it('should return a post', () => {
      const getPostSpy = jest.spyOn(postsController, 'getPost');
      expect(getPostSpy).toBeDefined();
    });
    it('should return posts', () => {
      const getPostsSpy = jest.spyOn(postsController, 'getPosts');
      expect(getPostsSpy).toBeDefined();
    });
  });
});
