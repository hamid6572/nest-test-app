import { Post } from './posts.model';
export declare class PostsService {
    posts: Post[];
    insertPost(userId: number, id: number, title: string, body: string): number;
    getPosts(): Post[];
}
