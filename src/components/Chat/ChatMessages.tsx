import { MESSAGES_MOCK } from "../../utils/mocks";
import ChatMessage from "./ChatMessage";

const ChatMessages = () => {
  return (
    <div className="flex flex-col px-6 py-6 gap-2.5">
      {MESSAGES_MOCK.map((i) => {
        return <ChatMessage key={i.id} item={i} />;
      })}
    </div>
  );
};

export default ChatMessages;
