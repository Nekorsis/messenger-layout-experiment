import ContextMenu from "../../icons/ContextMenu";
import Person from "../../icons/Person";
import Star from "../../icons/Star";
import NotificationsIndicator from "../NotificationsIndicator/NotificationsIndicator";
import SearchInput from "../SearchInput/SearchInput";
import StyledText from "../Typography/StyledText";

const ChatHeader = () => {
  return (
    <div className="flex flex-row w-full items-center justify-between px-6 pt-8 pb-5 border-b border-b-[#00000040]">
      <div className="flex flex-row items-center">
        <StyledText fontSize="20" bold>
          #chat_name
        </StyledText>
        <Star className="ml-2 cursor-pointer" />
      </div>
      <div className="flex flex-row items-center">
        <Person />
        <StyledText fontSize="14" className="text-[#A4A4A4] ml-1.5">
          71
        </StyledText>
        <SearchInput className="ml-6" />
        <NotificationsIndicator className="ml-6 cursor-pointer" />
        <div className="ml-6 cursor-pointer">
          <ContextMenu />
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;
