import { Request, Response } from "express";
import Product from "../models/product.model";

export const getProducts = async (req: Request, res: Response) => {
  const products = await Product.find();
  res.json({ length: products.length, products });
};

export const getProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.send(product);
};

export const createProduct = (req: Request, res: Response) => {
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

  const product = new Product({
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
  });

  product.save();
  res.json({ message: "Product created successfully", product });
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
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
  const updateProduct = await Product.findByIdAndUpdate(
    id,
    {
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
