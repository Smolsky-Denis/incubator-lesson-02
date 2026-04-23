import {FieldValidationError, validationResult} from "express-validator";
import {NextFunction, Request, Response} from "express";
import {HttpStatus} from "../core/types/http-statuses";

export const inputValidationMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(HttpStatus.BadRequest).json({
            errorsMessages: errors.array().map(err  => ({
                message: err.msg,
                field: (err as unknown as FieldValidationError).path
            }))
        });
    }

    next();
};
