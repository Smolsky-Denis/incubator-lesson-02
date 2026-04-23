import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const deleteBlogByIdHandler = (req: Request, res: Response) => {
    const id: string = req.params.id as string

    if(blogsRepository.deleteBlog(id)){
        return res.status(HttpStatus.NoContent).json({})
    }

    return res.status(HttpStatus.NotFound).json({})
}
