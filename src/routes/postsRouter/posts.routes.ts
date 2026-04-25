import {Router} from "express";
import {getPostListHandler} from "./handlers/get-blogs-list.handler";
import {createPostHandler} from "./handlers/creat-post.handler";
import {getPostByIdHandler} from "./handlers/get-post-by-id.handler";
import {updateBlogHandler} from "./handlers/update-post-by-id.handler";
import {deletePostByIdHandler} from "./handlers/delete-post-by-id.handler";
import {inputValidationMiddleware} from "../../validation/input-validation.middleware";
import {superAdminGuardMiddleware} from "../../auth/middlewares/super-admin.guard-middleware";
import {idValidation} from "../../validation/id.validation";
import {postInputValidation} from "../../entity/posts/validation/posts-dto.validation";

export const postsRouter = Router({})

postsRouter
    .get(
        '',
        getPostListHandler,
    )
    .get(
        '/:id',
        idValidation,
        inputValidationMiddleware,
        getPostByIdHandler,
    )
    .post(
        '',
        superAdminGuardMiddleware,
        postInputValidation,
        inputValidationMiddleware,
        createPostHandler,
    )
    .put(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        postInputValidation,
        inputValidationMiddleware,
        updateBlogHandler,
    )
    .delete(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        inputValidationMiddleware,
        deletePostByIdHandler,
    )
