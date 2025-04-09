import { Router } from "express";
import { QuoteController } from "../QuoteController";

export const quoteRouter = Router();

quoteRouter.post("/", QuoteController.create);
quoteRouter.get("/", QuoteController.list);
