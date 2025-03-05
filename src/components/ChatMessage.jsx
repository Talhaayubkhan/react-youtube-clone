const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center text-2xl">
      <span className="px-2 font-bold ">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
