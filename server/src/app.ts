import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import routes from "./routes/routes";

const app = express();

connectDB();

const allowedOrigins = [
  "https://kridhastore.in",
  "https://kridhastore.vercel.app",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

app.use("/api", routes);

app.get("/", (_req, res) => {
  console.log("✅ Root route hit");
  res.send("API is running");
});

export default app;
