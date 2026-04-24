import {Request, Response} from 'express';
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";
import {HttpStatus} from "../../../core/types/http-statuses";

export const getBlogsListHandler =  ( req: Request, res: Response ) => {
    const blogList = blogsRepository.getBlogList();
    res.status(HttpStatus.Ok).send(blogList)
}
