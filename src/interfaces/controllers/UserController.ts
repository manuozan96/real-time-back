import { Request, Response } from "express";
import { createUser, listUsers } from "../../application/use-cases/userUseCases";


export class UserController {
  static async create(req: Request, res: Response) {
    try {
      const user = await createUser(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ message: "Error creating user" });
    }
  }

  static async list(req: Request, res: Response) {
    try {
      const users = await listUsers();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error listing users" });
    }
  }
}
