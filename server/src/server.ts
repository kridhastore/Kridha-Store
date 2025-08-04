import dotenv from "dotenv";
dotenv.config();

import config from "./config/config";
import serverless from "serverless-http";
import app from "./app";

const isLocal = process.env.IS_LOCAL === "true";

if (isLocal) {
  app.listen(config.PORT, () => {
    console.log(`✅ Server running locally on http://localhost:${config.PORT}`);
  });
}

export const handler = serverless(app);
