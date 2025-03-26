import ChatMenu from "../ChatMenu/ChatMenu";
import ChatsList from "../ChatsList/ChatsList";

const SideBar = () => {
  return (
    <div className="flex flex-row items-start">
      <ChatsList />
      <ChatMenu />
    </div>
  );
};

export default SideBar;
