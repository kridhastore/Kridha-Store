import { Link } from "react-router-dom";
import { CollectionData } from "../assets/DummyData";

const Collections = () => {
  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <h1 className="mb-8 text-3xl font-semibold text-center">
        Our Collections
      </h1>

      <div className="grid grid-cols-3 gap-3 md:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {CollectionData.map((collection) => (
          <Link
            to={`/collections/${collection.slug}`}
            key={collection.id}
            className={
              "flex flex-col gap-2 items-center p-1 rounded-lg transition-all duration-300 cursor-pointer group hover:shadow-md hover:bg-gray-50"
            }
          >
            <img
              src={collection.image}
              alt={collection.slug}
              className="object-cover w-full rounded-md transition-transform duration-300 aspect-square group-hover:scale-105"
            />
            <h2 className="text-xs font-semibold text-center md:text-sm">
              {collection.name}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collections;
