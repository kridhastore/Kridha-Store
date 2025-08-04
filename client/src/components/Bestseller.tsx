import ProductCard from "./ProductCard";
import { fetchProducts } from "../store/fetch";
import { useNavigate } from "react-router-dom";
import type { ProductInterface } from "../store/types";
import { useEffect, useState } from "react";

function Bestseller() {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      if (data) {
        setProducts(data);
      }
    };

    getProducts();
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
          {products.slice(10, 14).map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              slug={product.slug}
              title={product.title}
              price={product.price}
              thumbnail={product.images[0]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bestseller;
