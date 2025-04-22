import { IMessage } from "../../utils/types";
import Avatar from "../Avatar/Avatar";

interface IProps {
  item: IMessage;
}

const ChatMessage = (props: IProps) => {
  return (
    <div className="flex flex-row items-start gap-3">
      <Avatar user={props.item.user} />
      <div className="gap-1">
        <div className="flex flex-row items-center gap-2">
          <p>{props.item.user.firstName}</p>
          <span>{props.item.createdAt.toDateString()}</span>
        </div>
        <p>{props.item.text}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
