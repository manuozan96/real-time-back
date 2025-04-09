import { Product } from "../../../domain/entities/Product";
import { ProductModel } from "../models/ProductModel";

export class ProductRepository {
  async create(product: Product): Promise<Product> {
    const newProduct = new ProductModel(product);
    await newProduct.save();
    return newProduct.toObject();
  }

  async findAll(): Promise<Product[]> {
    const products = await ProductModel.find();
    return products.map((p) => p.toObject());
  }
}
