import { User } from "../../../domain/entities/User";
import { UserModel } from "../models/UserModel";

export class UserRepository {
  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser.toObject();
  }

  async findAll(): Promise<User[]> {
    const users = await UserModel.find();
    return users.map((u) => u.toObject());
  }
}
