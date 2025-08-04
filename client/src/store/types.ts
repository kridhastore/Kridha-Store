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
  features: string;
}

export type ProductCardProps = Pick<
  ProductInterface,
  "_id" | "title" | "slug" | "price" | "thumbnail"
>;

export interface CollectionInterface {
  _id: string;
  name: string;
  slug: string;
  image: string;
}
