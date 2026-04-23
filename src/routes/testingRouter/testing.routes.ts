import {Router} from "express";
import {deleteTestingHandler} from "./handlers/delete-testing.handler";

export const testingRouter = Router({})

testingRouter
    .delete('/all-data', deleteTestingHandler)