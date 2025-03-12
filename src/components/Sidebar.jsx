import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaFilm,
  FaFootballBall,
  FaGamepad,
  FaHome,
  FaMusic,
  FaVideo,
  FaBroadcastTower,
  FaClock,
  FaBookmark,
} from "react-icons/fa";

const Sidebar = () => {
  const isMenuIconOpen = useSelector((store) => store.app?.isMenuOpen);
  if (!isMenuIconOpen) return null;

  return (
    <div className="z-20 fixed top-16 left-0 w-56 h-[calc(100vh-4rem)] p-4 bg-white shadow-md overflow-y-auto">
      {/* Home & Main Links */}
      <ul className="space-y-2">
        <Link to="/">
          <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
            <FaHome /> Home
          </li>
        </Link>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaVideo /> Videos
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaBroadcastTower /> Live
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaFilm /> Shorts
        </li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-semibold text-base mt-4 mb-2">Subscriptions</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaMusic /> Music
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaFootballBall /> Sports
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaGamepad /> Gaming
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaFilm /> Movies
        </li>
      </ul>

      {/* Watch Later */}
      <h1 className="font-semibold text-base mt-4 mb-2">Watch Later</h1>
      <ul className="space-y-2">
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaClock /> Watch Later
        </li>
        <li className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 hover:text-blue-600 cursor-pointer">
          <FaBookmark /> Saved
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
