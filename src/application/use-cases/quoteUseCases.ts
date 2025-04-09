import { Quote } from "../../domain/entities/Quote";
import { QuoteRepository } from "../../infrastructure/database/repositories/QuoteRepository";

const quoteRepository = new QuoteRepository();

export const createQuote = async (quote: Quote) => {
  return await quoteRepository.create(quote);
};

export const listQuotes = async () => {
  return await quoteRepository.findAll();
};
