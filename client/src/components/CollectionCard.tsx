import { Link } from "react-router-dom";
import type { CollectionInterface } from "../store/types";

interface CollectionCardProps
  extends CollectionInterface,
    React.HTMLAttributes<HTMLDivElement> {}

const CollectionCard = ({
  slug,
  _id,
  image,
  name,
  className,
  ...rest
}: CollectionCardProps) => {
  return (
    <div
      className={`flex flex-col items-center gap-2 p-1 rounded-lg transition-all duration-300 cursor-pointer group hover:shadow-md hover:bg-gray-50 ${
        className || ""
      }`}
      {...rest}
    >
      <Link to={`/collections/${slug}/${_id}`} key={_id} className="w-full">
        <img
          src={image}
          alt={slug}
          className="object-cover w-full rounded-md transition-transform duration-300 aspect-square group-hover:scale-105"
        />
        <h2 className="text-xs mt-2 font-semibold text-center md:text-sm">
          {name}
        </h2>
      </Link>
    </div>
  );
};

export default CollectionCard;
