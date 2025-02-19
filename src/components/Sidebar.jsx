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
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isMenuIconOpen = useSelector((store) => store.app?.isMenuOpen);
  if (!isMenuIconOpen) return null;

  return (
    <div className="p-5 shadow-lg w-[12rem] space-y-5">
      {/* Home & Main Links */}
      <ul className="space-y-3">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaHome /> Home
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaVideo /> Videos
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaBroadcastTower /> Live
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaFilm /> Shorts
        </li>
      </ul>

      {/* Subscriptions */}
      <h1 className="font-bold text-lg">Subscriptions</h1>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaMusic /> Music
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaFootballBall /> Sports
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaGamepad /> Gaming
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaFilm /> Movies
        </li>
      </ul>

      {/* Watch Later */}
      <h1 className="font-bold text-lg">Watch Later</h1>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaClock /> Watch Later
        </li>
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-500">
          <FaBookmark /> Saved
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
