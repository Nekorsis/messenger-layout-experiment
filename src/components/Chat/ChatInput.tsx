import React from "react";

interface IProps {
  onSend: () => void;
}

const ChatInput = (props: IProps) => {
  return (
    <div className="px-6 py-1.5 w-full  border-t border-t-[#00000024]">
      <div className="w-full h-full bg-[#ECECEC] rounded-md flex justify-center items-center p-6">
        <textarea
          className="w-full h-full resize-none focus:border-0"
          placeholder="Message in #general"
          //   rows={10}
        />
      </div>
    </div>
  );
};

export default ChatInput;
