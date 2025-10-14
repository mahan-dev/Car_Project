import { compare } from "bcryptjs";
import mongoose from "mongoose";

const BASE_URL = process.env.MONGO_URI;

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(BASE_URL);
  } catch (error) {
    console.log("Failed to connectDb", error);
  }
};

export const verifyPassword = async (
  password: string,
  hashedPassword: string
) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};
