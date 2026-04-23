import {Request, Response} from "express";
import {HttpStatus} from "../../../core/types/http-statuses";
import {db} from "../../../db/db";

export const deleteTestingHandler = (req: Request, res: Response) =>{
        db.blogs = [];
        db.posts = [];
    return res.sendStatus(HttpStatus.NoContent)
}