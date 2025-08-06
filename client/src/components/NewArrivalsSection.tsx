import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";
import { fetchProducts } from "../store/fetch";
import type { ProductInterface } from "../store/types";
import ProductCardSkeleton from "../skeletons/ProductCardSkeleton";

const NewArrivals = () => {
  const [products, setProducts] = useState<ProductInterface[]>([]);
  const [loading, setloading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setloading(true);
      const data = await fetchProducts();
      if (data) {
        setProducts(data);
        setloading(false);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <section className="my-8">
        {/* Header with Subtitle and View All */}
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <div>
            <h2 className="text-2xl font-semibold">🆕 New Arrivals</h2>
            <p className="text-sm font-medium tracking-wide text-gray-500 md:w-full w-50 md:text-base">
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

        {/* Product List */}
        <div className="overflow-x-auto md:overflow-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-2 justify-start items-stretch md:justify-center">
            {loading
              ? Array(4)
                  .fill(0)
                  .map((_, i) => <ProductCardSkeleton key={i} />)
              : products
                  .slice(0, 4)
                  .map((product) => (
                    <ProductCard
                      key={product._id}
                      _id={product._id}
                      slug={product.slug}
                      title={product.title}
                      price={product.price}
                      thumbnail={product.thumbnail}
                    />
                  ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewArrivals;
