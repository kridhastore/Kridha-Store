const CollectionCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center gap-2 p-1 rounded-lg animate-pulse">
      {/* Image placeholder */}
      <div className="w-full aspect-square bg-gray-200 rounded-md"></div>

      {/* Text placeholder */}
      <div className="w-2/3 h-4 bg-gray-200 rounded"></div>
    </div>
  );
};

export default CollectionCardSkeleton;
