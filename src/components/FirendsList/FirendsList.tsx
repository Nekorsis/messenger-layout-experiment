import { USERS_MOCK } from "../../utils/mocks";
import { IUser } from "../../utils/types";
import FriendPreview from "../FriendPreview/FriendPreview";
import StyledText from "../Typography/StyledText";

interface IProps {
  className?: string;
}

const FirendsList = (props: IProps) => {
  const renderFriend = (friend: IUser) => {
    return <FriendPreview key={friend.id} friend={friend} />;
  };

  return (
    <div className={props.className}>
      <div className="flex flex-row items-center justify-between">
        <StyledText bold fontSize="12" className="text-[#919191]">
          FRIENDS
        </StyledText>
        <StyledText bold fontSize="12" className="text-[#919191]">
          82
        </StyledText>
      </div>
      <div className="flex flex-col gap-1 mt-6">
        {USERS_MOCK.map(renderFriend)}
      </div>
    </div>
  );
};

export default FirendsList;
