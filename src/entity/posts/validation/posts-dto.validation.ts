import {body} from "express-validator";

const titleValidation = body("title")
    .exists().withMessage('title is required')
    .notEmpty().withMessage('title can not be empty')
    .isString().withMessage('title should be string')
    .trim()

const shortDescriptionValidation = body("shortDescription")
    .exists().withMessage('shortDescription is required')
    .notEmpty().withMessage('shortDescription can not be empty')
    .isString().withMessage('shortDescription should be string')
    .trim()

const contentValidation = body("content")
    .exists().withMessage('content is required')
    .notEmpty().withMessage('content can not be empty')
    .isString().withMessage('content should be string')
    .trim()

const blogIdValidation = body("blogId")
    .exists().withMessage('blogId is required')
    .notEmpty().withMessage('blogId can not be empty')
    .isString().withMessage('blogId should be string')
    .trim()

export const postInputDtoValidation = [
    titleValidation,
    shortDescriptionValidation,
    contentValidation,
    blogIdValidation,
]
