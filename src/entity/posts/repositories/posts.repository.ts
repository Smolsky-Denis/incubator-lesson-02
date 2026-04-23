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

    getPostById(id: string): PostDTO {
        return db.posts.find((post) => post.id === id) as PostDTO;
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
        const post = db.posts.find((post) => post.id === id)

        return  !!db.posts.splice(db.posts.indexOf(post as PostDTO), 1)
    }
}