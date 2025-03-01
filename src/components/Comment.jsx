import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Comment = ({ data }) => {
  const { user, text, replies, avatar, timestamp, likes, dislikes } = data;

  return (
    <div className="flex gap-4 mt-5 items-start bg-gray-100 p-4 rounded-lg">
      <img src={avatar} alt="user" className="w-12 h-12 rounded-full" />
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <h1 className="font-semibold">{user}</h1>
          <p className="text-gray-500 text-sm">{timestamp}</p>
        </div>
        <p className="mt-1">{text}</p>
        <div className="flex items-center gap-3 mt-2 text-gray-500 text-sm">
          <button className="flex items-center gap-1 hover:text-blue-500">
            <FaThumbsUp /> <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1 hover:text-red-500">
            <FaThumbsDown /> <span>{dislikes}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comment;
