import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";

const Chat = () => {
  return (
    <div className="flex bg-[#FFFFFF] w-full h-full">
      <ChatHeader />
      <ChatMessages />
    </div>
  );
};

export default Chat;
