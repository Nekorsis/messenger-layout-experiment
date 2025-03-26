import { IUser } from "../../utils/types";
import FriendPreview from "../FriendPreview/FriendPreview";
import StyledText from "../Typography/StyledText";

import avatar1 from "./../../assets/images/avatar1.png";
import avatar2 from "./../../assets/images/avatar2.png";
import avatar3 from "./../../assets/images/avatar3.png";
import avatar4 from "./../../assets/images/avatar4.png";
import avatar5 from "./../../assets/images/avatar5.png";
import avatar6 from "./../../assets/images/avatar6.png";

const FRIENDS_MOCK: IUser[] = [
  {
    id: 0,
    firstName: "Orlando",
    lastName: "Diggs",
    avatar: avatar1,
  },
  {
    id: 1,
    firstName: "Carmen",
    lastName: "Velasco",
    avatar: avatar2,
  },
  {
    id: 2,
    firstName: "Marie",
    lastName: "Jensen",
    avatar: avatar3,
  },
  {
    id: 3,
    firstName: "Alex",
    lastName: "Lee",
    avatar: avatar4,
  },
  {
    id: 4,
    firstName: "Leo",
    lastName: "Gill",
    avatar: avatar5,
  },
  {
    id: 5,
    firstName: "Britney",
    lastName: "Cooper",
    avatar: avatar6,
  },
];

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
        {FRIENDS_MOCK.map(renderFriend)}
      </div>
    </div>
  );
};

export default FirendsList;
