import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

const ProductDetail = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${apiUrl}/products`);
        const foundProduct: Product | undefined = response.data.products.find(
          (item: Product) => item.id === Number(id)
        );
        if (foundProduct) {
          setProduct(foundProduct);
          setMainImage(foundProduct.images[0]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (id) fetchProduct();
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
        <div className="flex flex-col items-center">
          <img
            src={mainImage}
            alt={product.title}
            className="object-cover w-72 h-72 rounded-xl md:w-96 md:h-96"
          />
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-4 mt-4 w-full max-w-md">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setMainImage(image)}
                  className={`overflow-hidden rounded-lg cursor-pointer transition hover:ring-2 hover:ring-orange-400 ${
                    mainImage === image ? "ring-2 ring-orange-500" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`thumbnail-${index}`}
                    className="object-cover w-full aspect-square"
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

          <p className="mb-4 text-gray-700">{product.description}</p>

          {/* Price */}
          <p className="mb-2 text-3xl font-bold text-orange-500">
            ₹{product.price.toLocaleString()}
          </p>
          <p className="mb-6 text-sm text-gray-500">
            {product.discountPercentage}% Off
          </p>

          <hr className="mb-6 border-gray-300" />

          {/* Specs Table */}
          <table className="mb-6 text-sm text-gray-600">
            <tbody>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Brand</td>
                <td>{product.brand}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Category</td>
                <td>{product.category}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Stock</td>
                <td>{product.stock}</td>
              </tr>
              <tr>
                <td className="pr-6 font-medium text-gray-500">Weight</td>
                <td>{product.weight} kg</td>
              </tr>
            </tbody>
          </table>

          <div className="mb-6 text-sm text-gray-600">
            <p>Warranty: {product.warrantyInformation}</p>
            <p>Shipping: {product.shippingInformation}</p>
            <p>Return Policy: {product.returnPolicy}</p>
          </div>

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
