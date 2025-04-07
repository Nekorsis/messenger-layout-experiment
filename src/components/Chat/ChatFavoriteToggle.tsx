import { useState } from "react";
import Star from "../../icons/Star";

const ChatFavoriteToggle = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div
      onClick={() => {
        setIsFavorite((prevValue) => !prevValue);
      }}
    >
      <Star
        className="ml-2 cursor-pointer"
        color={isFavorite ? "red" : "black"}
      />
    </div>
  );
};

export default ChatFavoriteToggle;
