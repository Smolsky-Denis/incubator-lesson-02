import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";

export const getPostByIdHandler =  (req: Request, res: Response) => {
    const id: string = req.params.id as string;

    const post = postsRepository.getPostById(id)

    return res.status(HttpStatus.Ok).send(post);
}
