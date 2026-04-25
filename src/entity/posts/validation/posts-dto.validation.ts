import { body } from "express-validator";
import {blogsRepository} from "../../blogs/repositories/blogs.repository";

export const postInputValidation = [
    body("title")
    .exists().withMessage("title is required")
    .bail()
    .isString().withMessage("title should be string")
    .bail()
    .trim()
    .isLength({ min: 1, max: 30 }).withMessage("title should be max 30 symbols"),

    body("shortDescription")
    .exists().withMessage("shortDescription is required")
    .bail()
    .isString().withMessage("shortDescription should be string")
    .bail()
    .trim()
    .isLength({ min: 1, max: 100 }).withMessage("shortDescription should be max 100 symbols"),

    body("content")
    .exists().withMessage("content is required")
    .bail()
    .isString().withMessage("content should be string")
    .bail()
    .trim()
    .isLength({ min: 1, max: 1000 }).withMessage("content should be max 1000 symbols"),

    body("blogId")
    .exists().withMessage("blogId is required")
    .bail()
    .isString().withMessage("blogId should be string")
    .bail()
    .custom((value) => {
        const blog = blogsRepository.getBlogById(value);
        if (!blog) throw new Error("blogId does not exist");
        return true;
    })
];
