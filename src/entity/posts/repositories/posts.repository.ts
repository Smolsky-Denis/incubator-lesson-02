import {db} from "../../../db/db";
import {PostDTO} from "../../../DTO/posts.dto";


export const postsRepository = {
    createPost(newPost: PostDTO): PostDTO {
        db.posts.push(newPost);

        return newPost;
    },
    getPostList(): PostDTO[] {
        return db.posts
    },

    getPostById(id: string): PostDTO | boolean{
        const index = db.posts.findIndex(post => post.id === id)
        if (index === -1) {
            return false
        }

        return db.posts[index]
    },

    updatePost(id: string, body: PostDTO)  {
        const post = db.posts.find((post) => post.id === id);
        if (post) {
            post.title = body.title;
            post.shortDescription = body.shortDescription;
            post.content = body.content;
        }
        return post
    },

    deletePost(id: string): boolean {
        const index = db.posts.findIndex(post => post.id === id)

        if (index === -1) return false;
        db.posts.splice(index, 1);

        return true;
    }
}