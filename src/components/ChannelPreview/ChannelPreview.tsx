import { cn } from "../../utils/cn";
import { IChannel } from "../../utils/types";
import StyledText from "../Typography/StyledText";

interface IProps {
  channel: IChannel;
  isSelected?: boolean;
  onSelect: (value: IChannel) => void;
}

const ChannelPreview = (props: IProps) => {
  const color = props.isSelected ? "#FFFFFF" : "#B5B5B5";

  return (
    <div
      className={cn(
        "px-4 py-2 rounded-[6px] cursor-pointer",
        props.isSelected ? "bg-[#FFFFFF20]" : "",
        "hover:bg-[#FFFFFF20]"
      )}
      onClick={() => {
        if (props.onSelect) {
          props.onSelect(props.channel);
        }
      }}
    >
      <StyledText fontSize={"14"} className={`text-[${color}]`}>
        {props.channel.name}
      </StyledText>
    </div>
  );
};

export default ChannelPreview;
