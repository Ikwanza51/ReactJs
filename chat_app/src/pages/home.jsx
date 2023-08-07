import { useContext } from "react";
import { Chatbox } from "../components/chatbox";
import { Sidebar } from "../components/sidebar";
import { authContext } from "../context/authContex";
import { Navigate } from "react-router";

export const Home = () => {
  const {currentUser} = useContext(authContext);
  
  if(currentUser==={}) return <Navigate to='/login' />;
  return (
    <div className="homeContainer">
      <div className="homeWrapper">
        <Sidebar />
        <Chatbox />
      </div>
    </div>
  );
};
