const ProductCardSkeleton = () => {
  return (
    <div className="flex-shrink-0 min-w-[10rem] max-w-[12rem] md:min-w-[15rem] md:max-w-[17rem] p-2 flex flex-col animate-pulse">
      {/* Image placeholder */}
      <div className="w-full h-[12rem] md:h-[20rem] bg-gray-200 rounded-xl"></div>

      {/* Details */}
      <div className="p-1 space-y-2">
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* Button placeholder */}
      <div className="py-3 mt-2 w-full rounded-lg bg-gray-200"></div>
    </div>
  );
};

export default ProductCardSkeleton;
