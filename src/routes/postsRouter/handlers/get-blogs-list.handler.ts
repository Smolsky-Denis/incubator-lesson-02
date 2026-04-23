import {Request, Response} from 'express';
import {HttpStatus} from "../../../core/types/http-statuses";
import {postsRepository} from "../../../entity/posts/repositories/posts.repository";

export const getPostListHandler =  ( req: Request, res: Response ) => {
    const postList = postsRepository.getPostList()
    res.status(HttpStatus.Ok).send(postList)
}
