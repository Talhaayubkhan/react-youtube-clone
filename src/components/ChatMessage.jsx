import { USER_ICON } from "../utils/constant";

const ChatMessage = ({ name, message, image }) => {
  return (
    <>
      <div className="flex flex-row items-center py-2">
        <img src={USER_ICON} className="w-12 h-12 rounded-2xl" alt="user" />
        <div className="font-semibold px-2">{name}</div>
        <div className="text-gray-500">{message}</div>
      </div>
    </>
  );
};

export default ChatMessage;
