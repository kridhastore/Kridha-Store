import mongoose from "mongoose";
import { CategoryDocument } from "../types/category.schema";

const categorySchema = new mongoose.Schema<CategoryDocument>(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
