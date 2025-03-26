import Chat from "../../icons/Chat";
import ChevronDown from "../../icons/ChevronDown";
import ChannelsList from "../ChannelsList/ChannelsList";
import FirendsList from "../FirendsList/FirendsList";
import StyledText from "../Typography/StyledText";
import "./../../assets/fonts/Lato-Regular.ttf";

const ChatMenu = () => {
  return (
    <div className="bg-[#25272ABF] px-6 py-9 w-[280px] h-svh overflow-y-auto">
      <div className="flex flex-row items-center">
        <StyledText fontSize="20" className="text-white" bold>
          Chat name
        </StyledText>
        <ChevronDown className="ml-1.5" />
      </div>
      <div className="flex flex-row items-center mt-9">
        <Chat />
        <StyledText fontSize="14" className="ml-3.5 text-[#B5B5B5]">
          All treads
        </StyledText>
      </div>
      <ChannelsList className="mt-8" />
      <FirendsList className="mt-8" />
    </div>
  );
};

export default ChatMenu;
