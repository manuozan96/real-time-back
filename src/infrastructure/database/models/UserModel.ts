import { Schema, model } from "mongoose";
import { User } from "../../../domain/entities/User";

const UserSchema = new Schema<User>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

export const UserModel = model<User>("User", UserSchema);
