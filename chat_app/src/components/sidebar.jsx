import React from "react";
import Searchbar from "./searchbar";
import Navbar from "./navbar";
import Chats from "./chats";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      <Navbar />
      <Searchbar />
      <Chats />
    </div>
  );
};
