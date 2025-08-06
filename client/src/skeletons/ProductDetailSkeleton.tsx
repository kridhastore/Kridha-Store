const ProductDetailSkeleton = () => {
  return (
    <div className="px-4 py-12 min-h-screen bg-white md:px-12 lg:px-24 animate-pulse">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Image Skeleton */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg aspect-square bg-gray-200 rounded-2xl"></div>
          <div className="flex gap-4 w-full mt-6 max-w-lg">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="min-w-[80px] h-20 rounded-xl bg-gray-200"
                ></div>
              ))}
          </div>
        </div>

        {/* Info Skeleton */}
        <div className="flex flex-col justify-start space-y-4">
          <div className="h-8 bg-gray-200 w-3/4 rounded"></div>
          <div className="h-5 bg-gray-200 w-1/3 rounded"></div>
          <div className="h-8 bg-gray-200 w-1/2 rounded"></div>

          <div className="h-32 bg-gray-200 w-full rounded-xl mt-4"></div>

          <div className="space-y-3 mt-6">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="h-10 bg-gray-200 w-full rounded-lg"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
