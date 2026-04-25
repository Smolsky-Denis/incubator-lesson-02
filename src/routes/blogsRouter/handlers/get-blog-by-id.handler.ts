import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const getBlogByIdHandler = (req: Request, res: Response) => {
    const id = req.params.id as string;

    const blog = blogsRepository.getBlogById(id);

    if (!blog) {
        return res.sendStatus(HttpStatus.NotFound);
    }

    return res.status(HttpStatus.Ok).json(blog);
};
