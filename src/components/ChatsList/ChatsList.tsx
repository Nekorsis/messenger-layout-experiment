import { useState } from "react";
import { IChat } from "../../utils/types";
import AddChatButton from "../AddChatButton/AddChatButton";
import ChatPreview from "../ChatPreview/ChatPreview";
import chatLogo from "./../../assets/images/logo.png";

const CHATS_MOCK: IChat[] = [
  {
    id: 0,
    name: "Chat 1",
    avatar: chatLogo,
  },
  {
    id: 2,
    name: "Chat 2",
    avatar: chatLogo,
  },
  {
    id: 3,
    name: "Chat 3",
    avatar: chatLogo,
  },
  {
    id: 4,
    name: "Chat 4",
    avatar: chatLogo,
  },
  {
    id: 5,
    name: "Chat 5",
    avatar: chatLogo,
  },
  {
    id: 6,
    name: "Chat 6",
    avatar: chatLogo,
  },
  {
    id: 7,
    name: "Chat 7",
    avatar: chatLogo,
  },
];

const ChatsList = () => {
  const [selected, setSelected] = useState<IChat | null>(CHATS_MOCK[0]);

  return (
    <div className="h-svh flex flex-col justify-between bg-[#000000ab] px-4">
      <div
        className="flex overflow-y-auto flex-col justify-start items-center gap-5 scroll pt-5"
        style={
          {
            //scrollbarGutter: "stable both-edges", // TODO
          }
        }
      >
        {CHATS_MOCK.map((i) => {
          const isSelected = selected?.id === i.id;

          return (
            <ChatPreview
              key={i.id}
              chat={i}
              onSelect={setSelected}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      <div className="h-[40px] my-5">
        <AddChatButton />
      </div>
    </div>
  );
};

export default ChatsList;
