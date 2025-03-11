import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex m-auto flex-col items-center justify-center h-[80vh] text-gray-700 animate-fadeIn">
      <FaSearch className="text-8xl text-gray-400 mb-6 animate-pulse" />
      <h1 className="text-4xl text-red-600 font-bold">No Videos Found</h1>
      <p className="text-lg text-gray-700 font-bold mt-2 max-w-lg text-center">
        Try searching with different keywords or explore trending videos.
      </p>
      <button
        onClick={() => navigate("/")}
        className="mt-6 px-5 py-2 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFound;
