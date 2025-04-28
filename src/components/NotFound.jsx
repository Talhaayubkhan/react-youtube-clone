import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center mx-auto min-h-[80vh] px-4 text-gray-700 animate-fadeIn">
      {/* Icon */}
      <div className="bg-gray-100 p-6 rounded-full mb-6">
        <FaSearch className="text-6xl text-gray-400 animate-pulse" />
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
        No Videos Found
      </h1>

      {/* Subtext */}
      <p className="text-base md:text-lg text-gray-600 max-w-md text-center mb-6">
        Sorry, we couldn't find any results. Try searching with different
        keywords or explore trending videos.
      </p>

      {/* Button */}
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold shadow-md transition-all duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
