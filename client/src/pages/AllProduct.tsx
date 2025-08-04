import axios from "axios";
import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";

const AllProduct = () => {
  interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
  }

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <section className="px-4 py-10 mx-auto max-w-7xl md:px-12">
      {/* Title and Subtitle */}
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold md:text-4xl">🛍 All Products</h1>
        <p className="mt-2 text-sm text-gray-600 md:text-base">
          Explore our complete range of premium products
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(14, 30).map((product) => (
          <ProductCard
            id={product.id}
            key={product.id}
            title={product.title}
            price={product.price}
            image={product.images[0]}
          />
        ))}
      </div>
    </section>
  );
};

export default AllProduct;
