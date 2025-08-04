import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import type { ProductInterface } from "../store/types";
import { fetchProducts } from "../store/fetch";

const ProductDetail = () => {
  const [product, setProduct] = useState<ProductInterface | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts(); // ✅ wait for the Promise

      if (data) {
        const product = data.find((item) => item._id === id); // ✅ find on array
        if (product) {
          setProduct(product);
          setMainImage(product.images[0]);
        }
      }
    };

    getProducts();
  }, [id]);

  if (!product)
    return (
      <div className="flex justify-center items-center h-screen">
        <Spinner />
      </div>
    );

  return (
    <div className="px-4 py-12 min-h-screen text-black bg-white md:px-12 lg:px-24">
      {/* Product Section */}
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Product Image + Thumbnails */}
        {/* Product Image + Thumbnails */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="relative w-full max-w-lg">
            <img
              src={mainImage}
              alt={product.title}
              className="object-cover w-full aspect-square rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>

          {/* Thumbnails */}
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
        <div className="flex flex-col justify-start">
          <h2 className="mb-3 text-4xl font-bold">{product.title}</h2>

          {/* Rating */}
          <div className="flex gap-2 items-center mb-3">
            <span className="text-xl text-orange-500">⭐</span>
            <span className="text-sm text-gray-600">
              {product.rating} • {product.reviews.length} reviews
            </span>
          </div>

          {/* Price */}
          <p className="mb-2 text-3xl font-bold text-orange-500">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="mb-6 text-sm text-gray-500">
            {product.discountPercentage}% Off
          </p>

          {/* Description */}
          <p className="mb-6 text-gray-700">{product.description}</p>

          {/* Features in an Aesthetic Box */}
          {product.features && (
            <div className="mb-6 p-5 bg-orange-50 rounded-xl shadow-md border border-orange-100">
              <h3 className="mb-3 text-lg font-semibold text-orange-600">
                Key Features
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {product.features.split(",").map((feature, index) => (
                  <li key={index}>{feature.trim()}</li>
                ))}
              </ul>
            </div>
          )}

          <hr className="mb-6 border-gray-300" />

          {/* Specs Table */}
          <table className="mb-6 text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Brand</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-500">collection </td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Stock</td>
                <td>{product.stock}</td>
              </tr>
            </tbody>
          </table>

          {/* Action Buttons */}
          <div className="flex flex-col gap-4 w-full sm:flex-row">
            <button
              onClick={() => navigate(`/checkout/${id}`)}
              className="flex-1 cursor-pointer py-3.5 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Buy Now
            </button>
            <button
              onClick={() => console.log("Added to Cart")}
              className="flex-1 cursor-pointer py-3.5 bg-gray-300 text-black rounded-lg hover:bg-gray-300 transition"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
