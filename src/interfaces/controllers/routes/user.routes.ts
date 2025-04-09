import { Router } from "express";
import { UserController } from "../UserController";

export const userRouter = Router();

userRouter.post("/", UserController.create);
userRouter.get("/", UserController.list);
