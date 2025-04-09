import { Router } from "express";
import { ProductController } from "../ProductController";

export const productRouter = Router();

productRouter.post("/", ProductController.create);
productRouter.get("/", ProductController.list);
