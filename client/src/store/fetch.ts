import axios from "axios";
import type { ProductInterface } from "./types";

export const fetchProducts = async (): Promise<
  ProductInterface[] | undefined
> => {
  const apiUrl = import.meta.env.VITE_API_URL;

  try {
    const response = await axios.get(`${apiUrl}/products/all`);
    const products: ProductInterface[] = response.data.products; // ✅ array of Product
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
