import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
// import { mockChatData } from "../utils/chatsData";
const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMesages = useSelector((store) => store?.chat?.messages);
  console.log(chatMesages);

  // console.log(chatMesages);

  useEffect(() => {
    const interval = setInterval(() => {
      // console.log("api polling interval");
      dispatch(addMessage());
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-[500px] p-4 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
      {chatMesages.map((chat) => (
        <ChatMessage
          key={chat.id}
          avatar={chat.avatar}
          timestamp={chat.timestamp}
          message={chat.message}
          name={chat.username}
        />
      ))}
    </div>
  );
};

export default LiveChat;
