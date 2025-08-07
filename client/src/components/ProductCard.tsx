import { useNavigate } from "react-router-dom";
import type { ProductCardProps } from "../store/types";

const ProductCard = ({
  _id,
  title,
  price,
  thumbnail,
  slug,
}: ProductCardProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${slug}/${_id}`)}
      className="flex-shrink-0 min-w-[10rem] max-w-[12rem] md:min-w-[15rem] md:max-w-[17rem] p-2 transition-shadow duration-300 cursor-pointer hover:shadow-xl flex flex-col"
    >
      {/* Image Container */}
      <div className="w-full h-[12rem] md:h-[20rem] overflow-hidden rounded-xl bg-gray-100 flex items-center justify-center">
        <img
          src={thumbnail}
          alt={title}
          className="object-cover w-full h-full rounded-xl transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Details */}
      <div className="p-1">
        <h2 className="overflow-hidden font-semibold text-nowrap text-md md:text-lg">
          {title}
        </h2>
        <p className="tracking-widest">Rs. {price}.00</p>
      </div>

      <button className="flex-1 px-6 py-2 w-full font-semibold text-gray-900 bg-white rounded-md border border-gray-300 transition-all duration-300 cursor-pointer hover:bg-gray-100 hover:shadow">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
