import { Schema, model } from "mongoose";
import { Product } from "../../../domain/entities/Product";

const ProductSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

export const ProductModel = model<Product>("Product", ProductSchema);
