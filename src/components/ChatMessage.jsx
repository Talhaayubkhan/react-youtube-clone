const ChatMessage = ({ name, message, avatar, timestamp }) => {
  return (
    <div className="flex items-center text-2xl">
      <img src={avatar} alt={name} className="rounded-full h-12 w-12 mr-4" />
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-gray-500">{message}</div>
        <div className="text-xs text-gray-600">{timestamp}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
