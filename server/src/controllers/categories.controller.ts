import { Request, Response } from "express";
import Category from "../models/category.model";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json({ length: categories.length, categories });
};

export const createCategory = (req: Request, res: Response) => {
  const { name, slug, description, image } = req.body;
  const category = new Category({ name, slug, description, image });
  category.save();
  res.json({ message: "Category created successfully", category });
};

export const updateCategory = (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, slug, description, image } = req.body;
  const updateCategory = Category.findByIdAndUpdate(
    id,
    { name, slug, description, image },
    { new: true }
  );
  res.json({ message: "Category updated successfully", updateCategory });
};

export const deleteCategory = (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteCategory = Category.findByIdAndDelete(id);
  res.json({ message: "Category deleted successfully", deleteCategory });
};
