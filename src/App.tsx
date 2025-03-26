import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import bgImageBlur from "./assets/images/mountain-bg-blur.png";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <div className="flex relative w-full h-full">
      <img src={bgImageBlur} className="w-full h-full absolute top-0 left-0 " />
      <div className="z-50 flex flex-row items-start w-full h-full">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
