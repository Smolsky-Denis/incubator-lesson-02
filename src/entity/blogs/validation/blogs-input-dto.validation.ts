import {body} from "express-validator";

const nameValidation = body("name")
    .exists().withMessage('name is required')
    .notEmpty().withMessage('name can not be empty')
    .isString().withMessage('name should be string')
    .trim()

const descriptionValidation = body("description")
    .exists().withMessage('description is required')
    .notEmpty().withMessage('description can not be empty')
    .isString().withMessage('description should be string')
    .trim()

const websiteUrlValidation = body("websiteUrl")
    .exists().withMessage('websiteUrl is required')
    .notEmpty().withMessage('websiteUrl can not be empty')
    .isString().withMessage('websiteUrl should be string')
    .trim()

export const blogInputDtoValidation = [
    nameValidation,
    descriptionValidation,
    websiteUrlValidation,
]
