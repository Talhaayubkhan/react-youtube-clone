import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { getRandomMessage, getRandomName } from "../utils/helper";

const LiveChat = () => {
  const chatMesages = useSelector((store) => store?.chat?.messages);
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessage({
          name: getRandomName(),
          message: getRandomMessage(),
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        name: getRandomName(),
        message: liveMessage,
      })
    );
    setLiveMessage("");
  };

  return (
    <>
      <div className="w-full h-[500px] p-5 ml-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMesages.map((chat, i) => (
          <ChatMessage key={i} message={chat.message} name={chat.name} />
        ))}
      </div>

      <form className="p-2 ml-5 w-full rounded-xl" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a message..."
          className="w-[80%] p-2 border border-black rounded-lg focus:outline-none"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="bg-green-300 font-bold py-1.5 px-3.5 mx-2 rounded cursor-pointer">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
