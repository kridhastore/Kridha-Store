import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";

const NewArrivals = () => {
  const [products, setProducts] = useState<
    { id: number; title: string; price: number; images: string[] }[]
  >([]);
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products?limit=6`);
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="mt-8">
      {/* Heading with Subheading and View All */}
      <div className="flex justify-between items-center mb-4 md:mb-6">
        <div>
          <h2 className="text-2xl font-semibold">🆕 New Arrivals</h2>
          <p className="text-sm font-medium tracking-wide text-gray-500 md:text-base">
            Freshly crafted just for you
          </p>
        </div>
        <button
          onClick={() => navigate("/all-products")}
          className="text-sm font-semibold text-gray-600 transition hover:text-black"
        >
          View All
        </button>
      </div>

      {/* Product Grid / Scroll */}
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
};

export default NewArrivals;
