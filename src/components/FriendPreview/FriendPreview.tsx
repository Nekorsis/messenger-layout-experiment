import { IUser } from "../../utils/types";
import Avatar from "../Avatar/Avatar";
import StyledText from "../Typography/StyledText";

interface IProps {
  friend: IUser;
}

const FriendPreview = (props: IProps) => {
  return (
    <div className="flex flex-row items-center hover:bg-[#FFFFFF20] rounded-[6px] px-4 py-2 cursor-pointer">
      <div className="w-2 h-2 rounded-full bg-[#70CC16]"></div>
      <Avatar user={props.friend} className="ml-1.5"></Avatar>
      <div className="ml-3">
        <StyledText fontSize="14" className="text-[#B5B5B5]">
          {props.friend.firstName}
        </StyledText>{" "}
        <StyledText fontSize="14" className="text-[#B5B5B5]">
          {props.friend.lastName}
        </StyledText>
      </div>
    </div>
  );
};

export default FriendPreview;
