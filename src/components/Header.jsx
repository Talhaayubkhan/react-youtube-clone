const Header = () => {
  return (
    <div>
      <div className="flex">
        <img
          alt="youtube_icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-5.png"
          className="w-10 h-10"
        />
        <img
          alt="youtube_logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9hZYWwcSGZOnxtzxUQ32JYnh5eu5bPR8dA&s"
          className="w-10 h-10"
        />
      </div>

      <div>
        <input type="text" placeholder="Search" />
        <button>Search</button>
      </div>

      <div>
        <img
          alt="user_icon"
          src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
        />
      </div>
    </div>
  );
};

export default Header;
