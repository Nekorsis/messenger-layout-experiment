import { useState } from "react";
import { cn } from "../../utils/cn";
import StyledText from "../Typography/StyledText";
import { IChannel } from "../../utils/types";
import ChannelPreview from "../ChannelPreview/ChannelPreview";
import { CHANNELS_MOCK } from "../../utils/mocks";

interface IProps {
  className?: string;
}

const ChannelsList = (props: IProps) => {
  const [selected, setSelected] = useState<IChannel | null>(null);

  return (
    <div>
      <div
        className={cn(
          "flex flex-row items-center justify-between",
          props.className
        )}
      >
        <StyledText fontSize="12" bold className="text-[#919191]">
          CHANNELS
        </StyledText>
        <StyledText fontSize="12" bold className="text-[#919191]">
          11
        </StyledText>
      </div>
      <div className="flex flex-col mt-4 gap-1">
        {CHANNELS_MOCK.map((i) => {
          const isSelected = selected?.id === i.id;
          return (
            <ChannelPreview
              key={i.id}
              channel={i}
              onSelect={setSelected}
              isSelected={isSelected}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ChannelsList;
