import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

const Chat = () => {
  return (
    <div className="flex bg-[#FFFFFF] w-full h-full flex-col">
      <ChatHeader />
      <ChatMessages />
      <ChatInput onSend={() => {}} />
    </div>
  );
};

export default Chat;
