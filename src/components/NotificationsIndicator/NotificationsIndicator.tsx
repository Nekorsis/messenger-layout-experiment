import Bell from "../../icons/Bell";
import { cn } from "../../utils/cn";

interface IProps {
  className?: string;
}

const NotificationsIndicator = (props: IProps) => {
  return (
    <div className={cn("relative cursor-pointer", props.className)}>
      <Bell />
      <div className="w-1.5 h-1.5 rounded-full bg-[#FD4948] absolute top-0 right-0" />
    </div>
  );
};

export default NotificationsIndicator;
