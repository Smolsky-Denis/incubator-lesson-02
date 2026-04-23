import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const getBlogByIdHandler =  (req: Request, res: Response) => {
    const id: string = req.params.id as string;

    const blog = blogsRepository.getBlogById(id)

    return res.status(HttpStatus.Ok).send(blog);
}
