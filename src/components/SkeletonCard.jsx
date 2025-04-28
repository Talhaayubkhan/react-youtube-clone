const SkeletonCard = () => {
  return (
    <div className="flex gap-4 p-3 bg-white rounded-lg animate-pulse">
      {/* Thumbnail placeholder */}
      <div className="w-64 h-36 bg-gray-300 rounded-md"></div>

      {/* Text placeholders */}
      <div className="flex flex-col gap-3 flex-1">
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        <div className="h-4 bg-gray-300 rounded w-1/2"></div>
        <div className="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );
};

export default SkeletonCard;
