import { cn } from "../../utils/cn";
import { IUser } from "../../utils/types";

interface IProps {
  user: IUser;
  className?: string;
}

const Avatar = (props: IProps) => {
  return (
    <img
      src={props.user.avatar}
      className={cn("w-8 h-8 rounded-[4px]", props.className)}
    />
  );
};

export default Avatar;
