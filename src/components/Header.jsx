import { toggleMenuIcon } from "../utils/appSlice";
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

  const handleSuggestionsClick = () => {
    dispatch(toggleMenuIcon());
    navigate(`/results`);
    setShowSuggestionsList(false);
  };

  return (
    <div className="shadow-lg flex justify-between items-center p-4">
      <div className="flex">
        <img
          alt="youtube_icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          className="h-8 cursor-pointer"
          onClick={() => handleMenuClick()}
        />
        <img
          alt="youtube_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s"
          className="h-8 mx-2"
        />
      </div>

      <div>
        <div>
          <input
            type="text"
            className="w-[30rem] border border-gray-500 p-2 rounded-l-full"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestionsList(true)}
            onBlur={handleBlurMove}
          />
          <button className="border border-gray-500 p-2 rounded-r-full cursor-pointer bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestionsList && (
          <div className="absolute bg-white w-[30rem] py-2 px-4 border-gray-300 rounded-lg shadow-lg">
            <ul className="space-y-1">
              {showSuggestions.map((s) => {
                return (
                  <li
                    className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 font-semibold text-lg rounded"
                    key={s}
                    onClick={handleSuggestionsClick}
                  >
                    <SearchIcon className="text-gray-500" /> {s}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>

      <div className="flex justify-center items-center">
        <img
          alt="notification_icon"
          src="https://i.pinimg.com/550x/f2/58/4f/f2584f450c74bee72c123c4184c58df7.jpg"
          className="h-8 px-3"
        />
        <img alt="user_icon" src={USER_ICON} className="h-10" />
      </div>
    </div>
  );
};

export default Header;
