import { Request, Response } from "express";
import {
  createQuote,
  listQuotes,
} from "../../application/use-cases/quoteUseCases";
import { NotificationService } from "../../infrastructure/websocket/NotificationService";

export class QuoteController {
  static async create(req: Request, res: Response) {
    try {
      const quote = await createQuote(req.body);
      NotificationService.notifyNewQuote(quote);
      res.status(201).json(quote);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating quote" });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const quotes = await listQuotes();
      res.status(200).json(quotes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error listing quotes" });
    }
  }
}
