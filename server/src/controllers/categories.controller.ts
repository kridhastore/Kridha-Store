import { Request, Response } from "express";
import Category from "../models/category.model";

export const getCategories = async (req: Request, res: Response) => {
  const categories = await Category.find();
  res.json({ length: categories.length, categories });
};

export const createCategory = (req: Request, res: Response) => {
  const { name, slug, image } = req.body;
  const category = new Category({ name, slug, image });
  category.save();
  res.json({ message: "Category created successfully", category });
};

export const updateCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, slug, image } = req.body;

    const updatedCategory = await Category.findByIdAndUpdate(
      id,
      { name, slug, image },
      { new: true }
    );

    if (!updatedCategory) {
      res.status(404).json({ message: "Category not found" });
      return; // ✅ ensures function exits
    }

    res.json({
      message: "Category updated successfully",
      category: updatedCategory,
    });
    return; // ✅ ensures all paths return
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating category" });
    return; // ✅ ensures TS sees a return
  }
};

export const deleteCategory = (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteCategory = Category.findByIdAndDelete(id);
  res.json({ message: "Category deleted successfully", deleteCategory });
};
