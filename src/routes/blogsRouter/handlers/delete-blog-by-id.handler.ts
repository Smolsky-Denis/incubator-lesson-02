import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const deleteBlogByIdHandler = (req: Request, res: Response) => {
    const id: string = req.params.id as string
    const isDeleted = blogsRepository.deleteBlog(id);
    if (!isDeleted) {
        return res.status(HttpStatus.NotFound)
    }

    return res.status(HttpStatus.NoContent)
}
