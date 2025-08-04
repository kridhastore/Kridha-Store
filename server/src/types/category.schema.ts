import { Document } from "mongoose";

export interface CategoryDocument extends Document {
  name: string;
  slug: string;
  description: string;
  image: string;
}
