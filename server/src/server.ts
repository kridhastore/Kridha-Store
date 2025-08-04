import dotenv from "dotenv";
dotenv.config();

import config from "./config/config";

import app from "./app";

app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
