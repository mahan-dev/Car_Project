import mongoose from "mongoose";
const BASE_URL = process.env.MONGO_URI;

export const connectDb = async () => {
  if (mongoose.connections[0].readyState) return;
  try {
    await mongoose.connect(BASE_URL, {
      dbName: "Car_Project",
    });
  } catch (error) {
    console.log("Failed to connectDb", error);
  }
};
