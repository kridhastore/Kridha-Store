import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import categoryRoutes from "./routes/categories.route";
import productRoutes from "./routes/product.route";
import checkoutRoutes from "./routes/checkout.route";

const app = express();

connectDB();

// const allowedOrigins = [
//   "https://kridhastore.in",
//   "https://kridhastore.vercel.app",
//   "https://admin.kridhastore.in",
//   "https://kridhastoreadmin.vercel.app",

// ];

// app.use(
//   cors({
//     origin: allowedOrigins,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );

app.use(cors());

app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/checkout", checkoutRoutes);

app.get("/", (_req, res) => {
  res.send("API is running");
});

export default app;
