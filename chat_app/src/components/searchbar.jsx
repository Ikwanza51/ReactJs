import React, { useContext, useState } from "react";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { authContext } from "../context/authContex";

const Searchbar = () => {
  const [searchUser, setSearchUser] = useState("");
  const [users, setUser] = useState(null);
  const { currentUser } = useContext(authContext);

  const handleSearch = async () => {    // Getting user from Search Keyword
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("displayName", "==", searchUser))
      );

      querySnapshot.forEach((doc) => {
        setUser(doc.data());
        console.log(users);
      });
      console.log("Query Success");
    } catch (e) {
      console.log("Error while Querying");
    }
  };

  const handleKey = (e) => {    //Handle Enter Key
    if (e.code === "Enter") {
      console.log("Enter Pressed");
      handleSearch();
    }
  };

  const checkDocPresent= async (collectionName,docName) =>{
    const docRef = doc(db, collectionName, docName);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {     //if Exists already
      console.log("Document Found : ", docSnap.data());
      return true;
    }else{
      console.log("No Document Found");
      return false
    } ;
  }

  const createAndUpdateChatRoom= async (user1,user2,combinedId) =>{
    const ChatRoomRef = collection(db, "chatroom");

    await setDoc(doc(ChatRoomRef, combinedId), {
      messages: arrayUnion({
          from: user1.displayName,
          fromPhoto: user1.photoURL,
          to: user2.displayName,
          toPhoto: user2.photoURL,
          message: "Hello",
      }),
    });
    console.log(
      "Created/Updated ChatRoom of "+user1.displayName + " and " + user2.displayName
    );
  }

  const createandUpdateChats= async (user1,user2,combinedId) =>{
    let checkDocument = await checkDocPresent("chats",user1.uid)
    const chatsRef = collection(db, "chats");
    if(checkDocument){
        await updateDoc(doc(chatsRef, user1.uid), {
            users: arrayUnion({
              chatroomid: combinedId,
              displayName: user2.displayName,
              photoURL: user2.photoURL,
              latesmessage: "Hello",
            }),
        });
        console.log(
          user1.displayName +
            " Chat Updated with " +
            user2.displayName
        );
    }else{
        await setDoc(doc(chatsRef, user1.uid), {
          users: [{
            chatroomid: combinedId,
            displayName: user2.displayName,
            photoURL: user2.photoURL,
            latesmessage: "Hello",
          }],
        });
        console.log(
          user1.displayName +
            " Chat Created with " +
            user2.displayName
        );
    }
  }

  const handleSelect = async (user) => {      //Creating Chats with the Selected User
    console.log(user.displayName + " selected");
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;     //setting Chatroom ID

    try {
        let chatroombool = await checkDocPresent("chatroom",combinedId);
        if(chatroombool){    //Checking Whether Chatroom between the current user and user selected
            console.log("ChatRoom Exits between " + currentUser.displayName + " and " + user.displayName);
        } 
        else {
            createAndUpdateChatRoom(currentUser,user,combinedId);    // Creating ChatRoom for the current user with selected user

            console.log("Creating Chats for both user for the First Time between them");
            createandUpdateChats(currentUser,user,combinedId);     // Creating Chats for the current user with selected user
            createandUpdateChats(user,currentUser,combinedId);     // Creating Chats for the selected user with current user
        }
    }catch (e) {
      console.log(
        "Error while creating new ChatRoom of " +
          currentUser.displayName +
          " " +
          user.displayName
      );
    }
  };

  return (
    <div className="searchbar">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Search User"
          onKeyDown={handleKey}
          onChange={(e) => {
            setSearchUser(e.target.value);
            if (e.target.value === "") {
              setUser(null);
            }
          }}
        />
      </div>
      {users && (
        <div className="userSearched" onClick={() => handleSelect(users)}>
          <img src={users.photoURL} alt="dp" />
          <div className="userChatinfo">
            <span>{users.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Searchbar;
