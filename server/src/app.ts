import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import productRoutes from "./routes/product.route";
import checkoutRoutes from "./routes/checkout.route";
import categoryRoutes from "./routes/categories.route";

const app = express();
connectDB();

app.use(express.json());

// app.use(
//   cors({
//     origin: "https://kridhastore.in", // your frontend domain
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true, // if you use cookies/auth
//   })
// );

app.use(cors());

app.use("/api/products", productRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/categories", categoryRoutes);

export default app;
