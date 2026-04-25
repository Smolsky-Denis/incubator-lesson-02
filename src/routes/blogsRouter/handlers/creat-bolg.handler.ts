import {Request, Response} from 'express';
import {BlogDTO, BlogInputDTO} from "../../../DTO/blog.dto";
import {db} from "../../../db/db";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";


export const createBlogHandler =  (
    req: Request<{},{}, BlogInputDTO>,
    res: Response
) => {
    const newBlog: BlogDTO = {
        id: (db.blogs.length ? Number(db.blogs[db.blogs.length - 1].id) + 1 : 1).toString(),
        name: req.body.name,
        description: req.body.description,
        websiteUrl: req.body.websiteUrl,
    }

    blogsRepository.createBlog(newBlog);

    return res.status(HttpStatus.Created).send(newBlog);
}
