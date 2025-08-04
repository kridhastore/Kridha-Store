interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export interface ProductInterface {
  _id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  brand: string;
  price: number;
  discountPercentage: number;
  stock: number;
  availabilityStatus: string;
  thumbnail: string;
  images: string[];
  tags: string[];
  rating: number;
  reviews: Review[]; // You can replace 'any' with a Review interface if you have one
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  __v: number;
  features: string;
}

export type ProductCardProps = Pick<
  ProductInterface,
  "_id" | "title" | "slug" | "price" | "thumbnail"
>;
