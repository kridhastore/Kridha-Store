import config from "./config";
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL || "");
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error;
  }
};

export default connectDB;
