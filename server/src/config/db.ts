import config from "./config";
import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(config.MONGODB_URL)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connectDB;
