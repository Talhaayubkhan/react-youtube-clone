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

  const sidebarItemClass =
    "flex items-center gap-4 p-2 text-sm rounded-lg hover:bg-gray-100 hover:text-blue-600 transition-colors cursor-pointer";

  return (
    <aside
      className={`fixed top-0 left-0 h-screen w-60 bg-white shadow-lg p-4 overflow-y-auto z-20
  transform transition-transform duration-300 ease-in-out
  ${isMenuIconOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="pt-16">
        {/* Home Section */}
        <ul className="space-y-2">
          <Link to="/">
            <li className={sidebarItemClass}>
              <FaHome className="text-lg" /> Home
            </li>
          </Link>
          <li className={sidebarItemClass}>
            <FaVideo className="text-lg" /> Videos
          </li>
          <li className={sidebarItemClass}>
            <FaBroadcastTower className="text-lg" /> Live
          </li>
          <li className={sidebarItemClass}>
            <FaFilm className="text-lg" /> Shorts
          </li>
        </ul>

        <div className="border-t border-gray-200 my-4" />

        {/* Subscriptions Section */}
        <h2 className="text-gray-700 font-semibold mb-2">Subscriptions</h2>
        <ul className="space-y-2">
          <li className={sidebarItemClass}>
            <FaMusic className="text-lg" /> Music
          </li>
          <li className={sidebarItemClass}>
            <FaFootballBall className="text-lg" /> Sports
          </li>
          <li className={sidebarItemClass}>
            <FaGamepad className="text-lg" /> Gaming
          </li>
          <li className={sidebarItemClass}>
            <FaFilm className="text-lg" /> Movies
          </li>
        </ul>

        <div className="border-t border-gray-200 my-4" />

        {/* Watch Later Section */}
        <h2 className="text-gray-700 font-semibold mb-2">Watch Later</h2>
        <ul className="space-y-2">
          <li className={sidebarItemClass}>
            <FaClock className="text-lg" /> Watch Later
          </li>
          <li className={sidebarItemClass}>
            <FaBookmark className="text-lg" /> Saved
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
