import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import type { ProductInterface } from "../store/types";
import { fetchProducts } from "../store/fetch";
import ProductDetailSkeleton from "../skeletons/ProductDetailSkeleton";
import ProductCard from "../components/ProductCard";

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<ProductInterface[]>(
    []
  );
  const [mainImage, setMainImage] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const data = await fetchProducts();

      if (data) {
        const foundProduct = data.find((item) => item._id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.images[0]);

          // Related products (just pick 4 random for now)
          const others = data.filter((item) => item._id !== id).slice(0, 4);
          setRelatedProducts(others);
        }
      }

      setLoading(false);
    };

    getProducts();
  }, [id]);

  if (loading || !product) return <ProductDetailSkeleton />;

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="px-4 py-12 mx-auto max-w-7xl md:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Product Images */}
          <div className="flex flex-col items-center">
            <div className="relative w-full max-w-lg">
              <img
                src={mainImage}
                alt={product.title}
                className="object-cover w-full aspect-square rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-4 w-full mt-6 overflow-x-auto max-w-lg scrollbar-hide">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setMainImage(image)}
                    className={`min-w-[80px] h-20 rounded-xl overflow-hidden cursor-pointer transition-all border-2 ${
                      mainImage === image
                        ? "border-orange-500 ring-2 ring-orange-300"
                        : "border-transparent hover:border-orange-400"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`thumbnail-${index}`}
                      className="object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col justify-start space-y-4">
            <h2 className="text-2xl md:text-3xl  font-bold">{product.title}</h2>

            {/* Rating */}
            <div className="flex gap-2 items-center">
              <span className="text-xl text-orange-500">⭐</span>
              <span className="text-sm text-gray-600">
                {product.rating} • {product.reviews.length} reviews
              </span>
            </div>

            {/* Price */}
            <p className="text-2xl font-bold text-orange-500">
              ₹{product.price.toLocaleString()}
            </p>

            {/* Features */}
            {product.features && (
              <div className="p-5 bg-gray-50 rounded-xl shadow-sm border border-gray-100">
                <h3 className="mb-3 text-lg font-semibold text-gray-800">
                  Description
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.split(",").map((feature, index) => (
                    <li key={index}>{feature.trim()}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Specs Table */}
            <div className="mt-4 px-2 space-y-1 text-sm text-gray-600">
              <div className="flex justify-between ">
                <span className="font-medium text-gray-500">
                  Shipping Details
                </span>
                <span>7-10 days after order confirmation</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">
                  Return & Refund
                </span>
                <span>No Returns & Refunds allowed</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 w-full sm:flex-row mt-6">
              <button
                onClick={() => navigate(`/checkout/${id}`)}
                className="flex-1 cursor-pointer py-3.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
              >
                Buy Now
              </button>
              <button
                onClick={() => console.log("Added to Cart")}
                className="flex-1 cursor-pointer py-3.5 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h3 className="text-2xl font-bold mb-6 text-center">
              You might also like
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {relatedProducts.map((prod) => (
                <ProductCard
                  key={prod._id}
                  _id={prod._id}
                  slug={prod.slug}
                  title={prod.title}
                  price={prod.price}
                  thumbnail={prod.thumbnail}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
