import { Request, Response } from "express";
import { createProduct, listProducts } from "../../application/use-cases/productUseCases";

export class ProductController {
  static async create(req: Request, res: Response) {
    try {
      const product = await createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error creating product" });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const products = await listProducts();
      res.status(200).json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error listing products" });
    }
  }
}
