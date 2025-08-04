import { Link } from "react-router-dom";
import type { CollectionCardProps } from "../store/types";

const CollectionCard = ({ slug, _id, image, name, index }) => {
  return (
    <div>
      <Link
        to={`/collections/${slug}`}
        key={_id}
        className={`
      flex flex-col items-center gap-2 p-1 rounded-lg 
      transition-all duration-300 cursor-pointer group hover:shadow-md hover:bg-gray-50
      ${index === 5 ? "md:hidden" : ""} 
    `}
      >
        <img
          src={image}
          alt={slug}
          className="object-cover w-full rounded-md transition-transform duration-300 aspect-square group-hover:scale-105"
        />
        <h2 className="text-xs font-semibold text-center md:text-sm">{name}</h2>
      </Link>
    </div>
  );
};

export default CollectionCard;
