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
  const [users, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const { currentUser } = useContext(authContext);

  const handleSearch = async () => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, "users"), where("displayName", "==", searchUser))
      );

      // console.log(querySnapshot.docs);

      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        setUser(doc.data());
        console.log(users);
        setLoading(true);
      });

      console.log("Query Success");
    } catch (e) {
      console.log("Error while querying");
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      console.log("Enter Pressed");
      handleSearch();
    }
  };

  const handleSelect = async () => {
    console.log("New User Selected");
    const combinedId =
      currentUser.uid > users.uid
        ? currentUser.uid + users.uid
        : users.uid + currentUser.uid;
    console.log(combinedId);

    try {

      //Checking Whether room between the current user and user present
      const docRef = doc(db, "chatroom", combinedId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        //if Exists already
        console.log("Document data:", docSnap.data());
        setLoading(false);
      } else {
        //if not exists
        console.log("No Room Found!");
        const RoomRef = collection(db, "chatroom");

        //room created
        await setDoc(doc(RoomRef, combinedId), {
          messages: [
            {
              from: currentUser.displayName,
              fromPhoto: currentUser.photoURL,
              to: users.displayName,
              toPhoto: users.photoURL,
              message: "",
            },
          ],
        });

        console.log(
          currentUser.displayName + " Initiated Room with " + users.displayName
        );

        // Creating ChatRoom1 for the current user with selected user
        const chatRef = doc(db, "chats", currentUser.uid);
        const chatSnap = await getDoc(chatRef);

        if (chatSnap.exists()) {
          console.log("Chats already exist");
          const chatsRef = collection(db, "chats");

          await updateDoc(doc(chatsRef, currentUser.uid), {
            users: arrayUnion({
              chatroomid: combinedId,
              displayName: users.displayName,
              photoURL: users.photoURL,
              latesmessage: "Hello",
            }),
          });
          console.log(
            currentUser.displayName +
              " Chat with " +
              users.displayName +
              " Created"
          );

          await updateDoc(doc(chatsRef, users.uid), {
            users: arrayUnion({
              chatroomid: combinedId,
              displayName: currentUser.displayName,
              photoURL: currentUser.photoURL,
              latesmessage: "Hello",
            }),
          });
          console.log(
            users.displayName +
              " Chat with " +
              currentUser.displayName +
              " Created"
          );
        } else {
          console.log("No Room Found!");
          const chatsRef = collection(db, "chats");

          await setDoc(doc(chatsRef, currentUser.uid), {
            users: [
              {
                chatroomid: combinedId,
                displayName: users.displayName,
                photoURL: users.photoURL,
                latesmessage: "Hello",
              },
            ],
          });
          console.log(currentUser.displayName + " Chats Created");

          await setDoc(doc(chatsRef, users.uid), {
            users: [
              {
                chatroomid: combinedId,
                displayName: currentUser.displayName,
                photoURL: currentUser.photoURL,
                latesmessage: "Hello",
              },
            ],
          });
          console.log(users.displayName + " Chats Created");
          setLoading(false);
        }
      }
    } catch (e) {
      console.log(
        "Error while creating new Chat Room of " +
          currentUser.displayName +
          " " +
          users.displayName
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
              setUser({});
              setLoading(false);
            }
          }}
        />
      </div>
      {loading && (
        <div className="userSearched" onClick={handleSelect}>
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
