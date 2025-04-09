import { Product } from "../../domain/entities/Product";
import { ProductRepository } from "../../infrastructure/database/repositories/ProductRepository";

const productRepository = new ProductRepository();

export const createProduct = async (product: Product) => {
  return await productRepository.create(product);
};

export const listProducts = async () => {
  return await productRepository.findAll();
};
