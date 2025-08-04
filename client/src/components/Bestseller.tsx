import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Bestseller() {
  interface Product {
    id: number;
    title: string;
    price: number;
    images: string[];
  }

  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

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
    <section className="my-8">
      {/* Header with Subtitle and View All */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-2xl font-semibold">🔥 Best-sellers</h2>
          <p className="text-sm font-medium tracking-wide text-gray-500 md:w-full w-50 md:text-base">
            Customer favorites that never go out of style
          </p>
        </div>
        <button
          onClick={() => navigate("/all-products")}
          className="text-sm font-semibold text-gray-600 transition hover:text-black"
        >
          View All
        </button>
      </div>

      {/* Product List */}
      <div className="overflow-x-auto md:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 justify-start items-stretch md:justify-center">
          {products.slice(0, 4).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bestseller;
