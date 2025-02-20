import { useDispatch } from "react-redux";
import { toggleMenuIcon } from "../utils/appSlice";
const Header = () => {
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    // it doesn't take anything, becuse we have not set the payload in store yet
    dispatch(toggleMenuIcon());
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

      <div className="">
        <input
          type="text"
          className="w-[30rem] border border-gray-500 p-2 rounded-l-full"
          placeholder="Search"
        />
        <button className="border border-gray-500 p-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>

      <div className="flex justify-center items-center">
        <img
          alt="notification_icon"
          src="https://i.pinimg.com/550x/f2/58/4f/f2584f450c74bee72c123c4184c58df7.jpg"
          className="h-8 px-3"
        />
        <img
          alt="user_icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
          className="h-10"
        />
      </div>
    </div>
  );
};

export default Header;
