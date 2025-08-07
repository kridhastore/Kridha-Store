const ProductDetailSkeleton = () => {
  return (
    <div className="px-4 py-12 min-h-screen bg-white animate-pulse md:px-12 lg:px-24">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {/* Image Skeleton */}
        <div className="flex flex-col items-center">
          <div className="w-full max-w-lg bg-gray-200 rounded-2xl aspect-square"></div>
          <div className="flex gap-4 mt-6 w-full max-w-lg">
            {Array(3)
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
          <div className="w-3/4 h-8 bg-gray-200 rounded"></div>
          <div className="w-1/3 h-5 bg-gray-200 rounded"></div>
          <div className="w-1/2 h-8 bg-gray-200 rounded"></div>

          <div className="mt-4 w-full h-32 bg-gray-200 rounded-xl"></div>

          <div className="mt-6 space-y-3">
            {Array(2)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full h-10 bg-gray-200 rounded-lg"
                ></div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;
