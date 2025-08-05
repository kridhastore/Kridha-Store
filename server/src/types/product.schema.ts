import { Document } from "mongoose";

export interface Review {
  rating: number;
  comment: string;
  date: Date;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductDocument extends Document {
  title: string;
  slug: string;
  description: string;
  features: string;
  category: string;
  category_id: Object;
  brand: string;
  price: number;
  discountPercentage: number;
  stock: number;
  availabilityStatus: "In Stock" | "Out of Stock" | "Preorder";
  thumbnail: string;
  images: string[];
  tags: string[];
  rating: number;
  reviews: Review[];
  createdAt: Date;
  updatedAt: Date;
}
