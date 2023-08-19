import { createContext, useState } from "react";

export const chatContext = createContext();

export const ChatContextProvider = ({ children }) => {
  const [chatUser, setChatUser] = useState({});

  const changeChatUSer = (user) => {
    setChatUser(user);
  }

  return (
    <chatContext.Provider
      value={{  chatUser, changeChatUSer }}
    >
      {children}
    </chatContext.Provider>
  );
};
