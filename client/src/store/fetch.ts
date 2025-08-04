import axios from "axios";
import type { ProductInterface, CollectionInterface } from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

export const fetchProducts = async (): Promise<
  ProductInterface[] | undefined
> => {
  try {
    const response = await axios.get(`${apiUrl}/products/all`);
    const products: ProductInterface[] = response.data.products; // ✅ array of Product
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const fetchCollections = async (): Promise<
  CollectionInterface[] | undefined
> => {
  try {
    const response = await axios.get(`${apiUrl}/categories/all`);
    const collections: CollectionInterface[] = response.data.categories; // ✅ array of Product
    return collections;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
