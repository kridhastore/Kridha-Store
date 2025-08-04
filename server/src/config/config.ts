type Config = {
  PORT: number;
  MONGODB_URL: string;
  JWT_SECRET: string;
};

const config: Config = {
  PORT: parseInt(process.env.PORT || "3000"),
  MONGODB_URL: process.env.MONGODB_URL!,
  JWT_SECRET: process.env.JWT_SECRET!,
};

export default config;
