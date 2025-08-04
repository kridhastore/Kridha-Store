import express from "express";
import cors from "cors";
import connectDB from "./config/db";
import routes from "./routes/routes";

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
app.use("/api", routes);

export default app;
