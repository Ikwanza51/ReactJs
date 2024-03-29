import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const creatingUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  
  const loggingIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  
  const loggingOut = () => {
    return signOut(auth);
  };

  const updatingUser = (name, downloadURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: downloadURL,
    });
  };

  useEffect(() => {
    const authstate = async () => {
      await onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          console.log("Auth state changing");
          console.log(user);
          console.log("Auth state changed");
      });
    };

    return () => {
      authstate();
    };
  },[currentUser]);

  return (
    <authContext.Provider
      value={{ currentUser, creatingUser, loggingOut, loggingIn, updatingUser }}
    >
      {children}
    </authContext.Provider>
  );
};
