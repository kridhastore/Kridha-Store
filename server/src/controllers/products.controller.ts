import { Request, Response } from "express";
import Product from "../models/product.model";
import Category from "../models/category.model";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json({ length: products.length, products });
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const {
      title,
      slug,
      description,
      features,
      category,
      brand,
      price,
      discountPercentage,
      stock,
      availabilityStatus,
      thumbnail,
      images,
      tags,
      rating,
      reviews,
    } = req.body;

    console.log(category);
    const collection = await Category.findOne({ name: category });

    if (!collection) {
      return res.status(404).json({ message: "Category not found" });
    }

    const product = new Product({
      title,
      slug,
      description,
      features,
      category,
      category_id: collection._id,
      brand,
      price,
      discountPercentage,
      stock,
      availabilityStatus,
      thumbnail,
      images,
      tags,
      rating,
      reviews,
    });

    await product.save();

    return res.json({ message: "Product created successfully", product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const {
    title,
    slug,
    description,
    features,
    category,
    category_id,
    brand,
    price,
    discountPercentage,
    stock,
    availabilityStatus,
    thumbnail,
    images,
    tags,
    rating,
    reviews,
  } = req.body;
  const updateProduct = await Product.findByIdAndUpdate(
    id,
    {
      title,
      slug,
      description,
      features,
      category,
      category_id,
      brand,
      price,
      discountPercentage,
      stock,
      availabilityStatus,
      thumbnail,
      images,
      tags,
      rating,
      reviews,
    },
    { new: true }
  );
  res.json({ message: "Product updated successfully", updateProduct });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.json({ message: "Product deleted successfully", deleteProduct });
};
