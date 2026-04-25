import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";

export const deletePostByIdHandler = (req: Request, res: Response) => {
    const id: string = req.params.id as string
    const isDeleted = postsRepository.deletePost(id);
    if(!isDeleted){
        return res.sendStatus(HttpStatus.NotFound);
    }

    return res.sendStatus(HttpStatus.NoContent);
}
