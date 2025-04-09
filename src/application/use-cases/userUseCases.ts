import { User } from "../../domain/entities/User";
import { UserRepository } from "../../infastructure/database/models/UserRepository";

const userRepository = new UserRepository();

export const createUser = async (user: User) => {
  return await userRepository.create(user);
};

export const listUsers = async () => {
  return await userRepository.findAll();
};
