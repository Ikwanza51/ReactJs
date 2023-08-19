import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContex";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
// import { chatContext } from "../context/chatContext";

const Chats = () => {
  const { currentUser } = useContext(authContext);
  // const { chatUser } = useContext(chatContext);
  const [chats, setChats] = useState(null);

  useEffect(() => {
    const getusers = () =>{
      onSnapshot(doc(db, "chats", currentUser.uid), (doc) => {
        setChats(doc.data());
        console.log("Chats effect");
      });
  }

    return () => {
      currentUser && getusers();
    };
  }, [currentUser]);

  return (
    <div className="chats">
      {chats &&
        chats.users.map((user) => {
          return (
            <div className="userSearched" key={user.chatroomid}>
              <img src={user.photoURL} alt="dp" />
              <div className="userChatinfo">
                <span>{user.displayName}</span>
                <p>{user.latesmessage}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Chats;
