import { Schema, model } from "mongoose";
import { Review, ProductDocument } from "../types/product.schema";

const reviewSchema = new Schema<Review>(
  {
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    date: { type: Date, default: Date.now },
    reviewerName: { type: String, required: true },
    reviewerEmail: { type: String, required: true },
  },
  { _id: false }
);

const productSchema = new Schema<ProductDocument>(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true }, // SEO-friendly URL
    description: { type: String, required: true },
    features: { type: String },
    category: { type: String, required: true },
    brand: { type: String },

    price: { type: Number, required: true },
    discountPercentage: { type: Number, default: 0 },
    stock: { type: Number, required: true },
    availabilityStatus: {
      type: String,
      enum: ["In Stock", "Out of Stock", "Preorder"],
      default: "In Stock",
    },

    thumbnail: { type: String },
    images: [{ type: String }],

    tags: [{ type: String }],
    rating: { type: Number, default: 0 },
    reviews: [reviewSchema],
  },
  { timestamps: true } // adds createdAt & updatedAt
);

export default model<ProductDocument>("Products", productSchema);
