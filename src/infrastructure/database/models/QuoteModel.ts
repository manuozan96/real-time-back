import { Schema, model } from "mongoose";
import { Quote } from "../../../domain/entities/Quote";

const QuoteSchema = new Schema<Quote>({
  client: { type: String, required: true },
  products: [
    {
      name: { type: String, required: true },
      price: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

export const QuoteModel = model<Quote>("Quote", QuoteSchema);
