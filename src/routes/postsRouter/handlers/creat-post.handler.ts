import {Request, Response} from 'express';
import {db} from "../../../db/db";
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";
import {FullPostDTO, PostInputDTO} from "../../../DTO/posts.dto";
import {BlogDTO} from "../../../DTO/blog.dto";


export const createPostHandler =  (
    req: Request<{},{}, PostInputDTO>,
    res: Response
) => {
    const blogId = req.body.blogId
    const blog =  db.blogs.find((blog: BlogDTO) => blog.id === blogId) as BlogDTO;

    const newPost: FullPostDTO = {
        id: (db.blogs.length ? Number(db.blogs[db.blogs.length - 1].id) + 1 : 0).toString(),
        title: req.body.title,
        shortDescription: req.body.shortDescription,
        content: req.body.content,
        blogId: req.body.blogId,
        blogName: blog.name
    }

    postsRepository.createPost(newPost);

    return res.status(HttpStatus.Created).send(newPost);
}
