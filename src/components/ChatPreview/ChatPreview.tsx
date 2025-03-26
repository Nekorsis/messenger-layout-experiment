import { cn } from "../../utils/cn";
import { IChat } from "../../utils/types";

interface IProps {
  chat: IChat;
  onSelect: (value: IChat) => void;
  isSelected?: boolean;
}

const ChatPreview = (props: IProps) => {
  return (
    <img
      onClick={() => {
        if (props.onSelect) {
          props.onSelect(props.chat);
        }
      }}
      className={cn(
        "w-[40px] h-[40px] cursor-pointer hover:opacity-100",
        props.isSelected ? "opacity-100" : "opacity-30"
      )}
      src={props.chat.avatar}
      alt={props.chat.name}
    />
  );
};

export default ChatPreview;
