import mongoose, { model, Model, models } from "mongoose";
import { userInterface } from "@/models/interface/userSchema";

const userSchema = new mongoose.Schema<userInterface>({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const UserModel: Model<userInterface> =
  models.carDb || model<userInterface>("carDb", userSchema, "Car");
