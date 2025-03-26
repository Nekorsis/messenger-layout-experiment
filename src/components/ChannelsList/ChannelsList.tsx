import { useState } from "react";
import { cn } from "../../utils/cn";
import StyledText from "../Typography/StyledText";
import { IChannel } from "../../utils/types";
import ChannelPreview from "../ChannelPreview/ChannelPreview";

const CHANNELS_MOCK: IChannel[] = [
  {
    id: 0,
    name: "# general",
  },
  {
    id: 1,
    name: "# support",
  },
  {
    id: 2,
    name: "# marketing",
  },
  {
    id: 3,
    name: "# thailand",
  },
  {
    id: 4,
    name: "# bali",
  },
  {
    id: 5,
    name: "# poland",
  },
  {
    id: 6,
    name: "# australia",
  },
  {
    id: 7,
    name: "# jobs",
  },
  {
    id: 8,
    name: "# startups",
  },
  {
    id: 9,
    name: "# italy",
  },
  {
    id: 10,
    name: "# freelance",
  },
];

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
