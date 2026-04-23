import {Request, Response} from 'express';
import {BlogDTO} from "../../../DTO/blog.dto";
import {HttpStatus} from "../../../core/types/http-statuses";
import {blogsRepository} from "../../../entity/blogs/repositories/blogs.repository";

export const updateBlogHandler = ( req: Request<BlogDTO>, res: Response ) => {
    const id: string = req.params.id
    const updatedBlog = blogsRepository.updateBlog(id, req.body)

    if (updatedBlog) {
        return res.status(HttpStatus.NoContent).json({})
    }
    return res.status(HttpStatus.NotFound).json({})
}
