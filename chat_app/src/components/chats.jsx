import React, { useContext, useEffect, useState } from "react";
import { authContext } from "../context/authContex";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Chats = () => {
  const { currentUser } = useContext(authContext);
  const [chats, setChats] = useState();
  const [loading,setloading] = useState(false);

  useEffect(() => {
    const getusers = async() =>{
      await onSnapshot(doc(db, "chats", currentUser.uid), (doc) => {
        setChats(doc.data());
        chats!=={} && setloading(true);
        console.log("Chats effect");
      // console.log(chats);
    });
  }

    return () => {
      console.log(currentUser);
      currentUser && currentUser.uid && getusers();
    };
  }, [currentUser.uid,chats,loading]);

  return (
    <div className="chats">
      {loading &&
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
