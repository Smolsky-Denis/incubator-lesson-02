import {Router} from "express";
import {superAdminGuardMiddleware} from "../../auth/middlewares/super-admin.guard-middleware";
import {blogInputDtoValidation} from "../../entity/blogs/validation/blogs-input-dto.validation";
import {createBlogHandler} from "./handlers/creat-bolg.handler";
import {getBlogsListHandler} from "./handlers/get-blogs-list.handler";
import {inputValidationMiddleware} from "../../validation/input-validation.middleware";
import {updateBlogHandler} from "./handlers/update-blogs-by-id.handler";
import {getBlogByIdHandler} from "./handlers/get-blog-by-id.handler";
import {deleteBlogByIdHandler} from "./handlers/delete-blog-by-id.handler";
import {idValidation} from "../../validation/id.validation";

export const blogsRouter = Router({})

blogsRouter
    .get(
        '',
        getBlogsListHandler,
    )
    .get(
        '/:id',
        idValidation,
        inputValidationMiddleware,
        getBlogByIdHandler,
    )
    .post(
        '',
        superAdminGuardMiddleware,
        blogInputDtoValidation,
        inputValidationMiddleware,
        createBlogHandler,
    )
    .put(
        '/:id',
        superAdminGuardMiddleware,
        idValidation,
        blogInputDtoValidation,
        inputValidationMiddleware,
        updateBlogHandler,
    )
    .delete(
        '/:id',
        idValidation,
        inputValidationMiddleware,
        deleteBlogByIdHandler,
    )
