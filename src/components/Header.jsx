import { closeMenuIcon, toggleMenuIcon } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { FaSearch as SearchIcon } from "react-icons/fa";
import { useSearchSuggestions } from "../hooks/useSearchSuggestions";
import { USER_ICON } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [showSuggestionsList, setShowSuggestionsList] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { searchQuery, setSearchQuery, showSuggestions } =
    useSearchSuggestions();

  const handleMenuClick = () => {
    dispatch(toggleMenuIcon());
  };

  const handleBlurMove = () => {
    const timer = setTimeout(() => {
      setShowSuggestionsList(false);
    }, 300);
    return () => clearTimeout(timer);
  };

  const handleSuggestionsClick = (showSuggestions) => {
    dispatch(closeMenuIcon());
    navigate(`/results?search_query=${showSuggestions}`);
    setShowSuggestionsList(false);
    setSearchQuery(showSuggestions);
  };

  const handleSearch = (showSuggestions) => {
    if (!searchQuery.trim()) return;
    navigate(`/results?search_query=${showSuggestions}`);
    setSearchQuery(showSuggestions);
  };

  return (
    <div className="shadow-md flex justify-between items-center p-3 sticky top-0 bg-white z-10">
      <div className="flex items-center">
        <img
          alt="youtube_icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          className="h-8 cursor-pointer hover:bg-gray-100 p-1 rounded-full transition-colors"
          onClick={() => handleMenuClick()}
        />
        <img
          alt="youtube_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s"
          className="h-8 mx-4"
        />
      </div>

      <div className="relative flex-1 max-w-2xl mx-4">
        <div className="flex">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 px-4 rounded-l-full focus:outline-none focus:border-blue-400 transition-colors"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionsList(true)}
            onBlur={handleBlurMove}
          />
          <button
            className="border border-gray-300 border-l-0 p-2 px-6 rounded-r-full cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-center"
            onClick={() => handleSearch(searchQuery)}
          >
            <SearchIcon className="text-gray-600" />
          </button>
        </div>
        {showSuggestionsList && (
          <div className="absolute bg-white w-full mt-1 py-2 px-2 border border-gray-200 rounded-lg shadow-lg">
            <ul className="space-y-1">
              {showSuggestions.map((s) => (
                <li
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-100 p-2 text-base rounded transition-colors"
                  key={s}
                  onClick={() => handleSuggestionsClick(s)}
                >
                  <SearchIcon className="text-gray-500 text-sm" />
                  <span className="truncate">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center gap-4">
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
          <img
            alt="notification_icon"
            src="https://i.pinimg.com/550x/f2/58/4f/f2584f450c74bee72c123c4184c58df7.jpg"
            className="h-6"
          />
        </div>
        <div className="hover:bg-gray-100 rounded-full cursor-pointer transition-colors">
          <img
            alt="user_icon"
            src={USER_ICON}
            className="h-9 rounded-full border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
