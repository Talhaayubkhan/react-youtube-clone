import { closeMenuIcon, toggleMenuIcon } from "../utils/appSlice";
import { useDispatch } from "react-redux";
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

  const handleSuggestionsClick = (suggestion) => {
    dispatch(closeMenuIcon());
    navigate(`/results?search_query=${suggestion}`);
    setShowSuggestionsList(false);
    setSearchQuery(suggestion);
  };

  const handleSearch = (query) => {
    if (!query.trim()) return;
    navigate(`/results?search_query=${query}`);
    setSearchQuery(query);
  };

  return (
    <header className="sticky top-0 bg-white shadow-sm z-50 px-4 py-2 flex items-center justify-between">
      {/* Left: Menu and Logo */}
      <div className="flex items-center gap-4">
        <img
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          alt="menu"
          className="h-7 cursor-pointer p-1 hover:bg-gray-100 rounded-full transition"
          onClick={handleMenuClick}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s"
          alt="youtube-logo"
          className="h-8 cursor-pointer"
        />
      </div>

      {/* Center: Search */}
      <div className="flex-1 max-w-2xl mx-8 relative">
        <div className="flex">
          <input
            type="text"
            className="w-full border border-gray-300 p-2 px-4 rounded-l-full focus:outline-none focus:border-blue-500 text-sm transition"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionsList(true)}
            onBlur={handleBlurMove}
          />
          <button
            className="bg-gray-100 hover:bg-gray-200 border border-gray-300 border-l-0 p-2 px-5 rounded-r-full transition"
            onClick={() => handleSearch(searchQuery)}
          >
            <SearchIcon className="text-gray-600" />
          </button>
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestionsList && (
          <div className="absolute w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-y-auto transition">
            <ul className="divide-y divide-gray-100">
              {showSuggestions.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100 transition"
                  onMouseDown={() => handleSuggestionsClick(s)} // use mouseDown to avoid blur issue
                >
                  <SearchIcon className="text-gray-400 text-xs" />
                  <span className="truncate text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-4">
        <div className="p-2 hover:bg-gray-100 rounded-full cursor-pointer transition">
          <img
            src="https://i.pinimg.com/550x/f2/58/4f/f2584f450c74bee72c123c4184c58df7.jpg"
            alt="notification"
            className="h-6 w-6 object-contain"
          />
        </div>
        <div className="p-1 hover:bg-gray-100 rounded-full cursor-pointer transition">
          <img
            src={USER_ICON}
            alt="user"
            className="h-8 w-8 rounded-full border border-gray-200 object-cover"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
