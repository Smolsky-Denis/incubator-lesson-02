import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {PostDTO} from "../../../DTO/posts.dto";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";

export const updateBlogHandler = ( req: Request<PostDTO>, res: Response ) => {
    const id: string = req.params.id
    const updatedPost = postsRepository.updatePost(id, req.body)

    if (updatedPost) {
        return res.status(HttpStatus.NoContent).json({})
    }
    return res.status(HttpStatus.NotFound).json({})
}
