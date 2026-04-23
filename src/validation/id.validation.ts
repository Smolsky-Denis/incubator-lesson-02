import { param } from "express-validator"

export const idValidation = param("id")
    .exists().withMessage("id is required")
    .notEmpty().withMessage("id cannot be empty")
    .isInt({min: 0}).withMessage("id must be a positive integer or 0")