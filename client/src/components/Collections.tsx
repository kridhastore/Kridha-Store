import { Link } from "react-router-dom";
import { CollectionData } from "../assets/DummyData";

const Collection = () => {
  return (
    <section className=" mt-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 md:mb-6  ">
        <h2 className="text-2xl font-semibold">🎨 Collections</h2>
        <Link
          to="/collections"
          className="text-sm font-semibold text-gray-600 transition hover:text-black"
        >
          View All
        </Link>
      </div>

      {/* collectionsGrid */}
      <div className="grid grid-cols-3 gap-3 md:gap-6 md:grid-cols-4 lg:grid-cols-5">
        {CollectionData.slice(0, 6).map((collection, index) => (
          <Link
            to={`/collections/${collection.slug}`}
            key={collection.id}
            className={`
      flex flex-col items-center gap-2 p-1 rounded-lg 
      transition-all duration-300 cursor-pointer group hover:shadow-md hover:bg-gray-50
      ${index === 5 ? "md:hidden" : ""} 
    `}
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
    </section>
  );
};

export default Collection;
