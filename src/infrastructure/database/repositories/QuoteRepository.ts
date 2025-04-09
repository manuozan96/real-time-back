import { Quote } from "../../../domain/entities/Quote";
import { QuoteModel } from "../models/QuoteModel";

export class QuoteRepository {
  async create(quote: Quote): Promise<Quote> {
    const newQuote = new QuoteModel(quote);
    await newQuote.save();
    return newQuote.toObject();
  }

  async findAll(): Promise<Quote[]> {
    const quotes = await QuoteModel.find();
    return quotes.map((q) => q.toObject());
  }
}
