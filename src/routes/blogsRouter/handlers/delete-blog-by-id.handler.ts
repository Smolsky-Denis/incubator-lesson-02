import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const deleteBlogByIdHandler = (req: Request, res: Response) => {
    const id = req.params.id as string
    const isDeleted = blogsRepository.deleteBlog(id)
    if (!isDeleted) {
        return res.sendStatus(HttpStatus.NotFound);
    }

    return res.sendStatus(HttpStatus.NoContent);
};
