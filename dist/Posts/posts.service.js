"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const posts_model_1 = require("./posts.model");
class PostsService {
    constructor() {
        this.posts = [];
    }
    insertPost(userId, id, title, body) {
        const newPost = new posts_model_1.Post(userId, id, title, body);
        this.posts.push(newPost);
        return userId;
    }
    getPosts() {
        return this.posts;
    }
}
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map