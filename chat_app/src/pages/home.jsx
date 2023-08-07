import { Chatbox } from "../components/chatbox";
import { Sidebar } from "../components/sidebar";

export const Home = () => {
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};
