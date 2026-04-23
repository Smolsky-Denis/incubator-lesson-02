import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";

export const deletePostByIdHandler = (req: Request, res: Response) => {
    const id: string = req.params.id as string

    if(postsRepository.deletePost(id)){
        return res.status(HttpStatus.NoContent).json({})
    }

    return res.status(HttpStatus.NotFound).json({})
}
