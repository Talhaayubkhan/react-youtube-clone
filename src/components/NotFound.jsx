import { FaSearch } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-gray-600">
      <FaSearch className="text-6xl mb-4 text-gray-400" />
      <h1 className="text-2xl font-semibold">No Videos Found</h1>
      <p className="text-lg text-gray-500 mt-2">
        Try searching with different keywords.
      </p>
    </div>
  );
};

export default NotFound;
