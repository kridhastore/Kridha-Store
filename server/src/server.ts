import dotenv from "dotenv";
dotenv.config();

import config from "./config/config";
import app from "./app";
import serverless from "serverless-http";

// 👇 Run locally
if (process.env.IS_LOCAL === "true") {
  app.listen(config.PORT, () => {
    console.log(`✅ Server running locally on http://localhost:${config.PORT}`);
  });
}

// 👇 Export for Vercel
export default serverless(app);
