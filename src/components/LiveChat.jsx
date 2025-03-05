import ChatMessage from "./ChatMessage";

const LiveChat = () => {
  return (
    <div className="w-full h-[500px] p-4 ml-2 border border-black bg-slate-100 rounded-lg">
      <ChatMessage name="Talha" message="this is live things" />
      <ChatMessage name="Talha" message="this is live things" />
      <ChatMessage name="Talha" message="this is live things" />
      <ChatMessage name="Talha" message="this is live things" />
      <ChatMessage name="Talha" message="this is live things" />
      <ChatMessage name="Talha" message="this is live things" />
    </div>
  );
};

export default LiveChat;
