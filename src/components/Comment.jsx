import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Comment = ({ data }) => {
  const { user, text, avatar, timestamp, likes, dislikes, key } = data;

  return (
    <div
      key={key}
      className="flex gap-4 mt-4 p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
    >
      {/* User Avatar */}
      <img
        src={avatar}
        alt="user"
        className="w-10 h-10 min-w-[40px] min-h-[40px] rounded-full border border-gray-300"
      />

      {/* Comment Content */}
      <div className="flex-1 overflow-hidden">
        {/* User Info */}
        <div className="flex items-center gap-2">
          <h1 className="font-semibold text-gray-800 truncate">{user}</h1>
          <p className="text-black font-semibold text-xs">{timestamp}</p>
        </div>

        {/* Comment Text */}
        <p className="mt-1 text-gray-700 break-words text-sm">{text}</p>

        {/* Like & Dislike Buttons */}
        <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
          <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
            <FaThumbsUp className="text-base" />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-red-500 transition-colors">
            <FaThumbsDown className="text-base" />
            <span>{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
