import React from "react";
import CallIcon from "@mui/icons-material/Call";
import VideocamIcon from "@mui/icons-material/Videocam";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import { chatContext } from "../context/chatContext";

const Chatheader = () => {
  // const { chatUser } = useContext(chatContext);

  return (
    <div className="chatheader">
        <div className="profileinfo">
          <img src="" alt="DP" />
          <span className="profileName">chat.displayName</span>
        </div>
        <div className="icons">
          <CallIcon className="icon"></CallIcon>
          <VideocamIcon className="icon"></VideocamIcon>
          <MoreVertIcon className="icon"></MoreVertIcon>
        </div>
      </div>
  );
};

export default Chatheader;
