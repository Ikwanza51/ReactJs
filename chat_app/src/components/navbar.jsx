import React, { useContext } from "react";
import favicon from "../img/falcon.png";
import { authContext } from "../context/authContex";
import { useNavigate } from "react-router";

const Navbar = () => {
  const { currentUser,loggingOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try{
      await loggingOut();
      console.log('logged out');
      console.log(currentUser);
      navigate("/login");
    }catch(e){
      console.log("Error occurred while Signing in");
      console.log(e);
    }
  };

  return (
    <div className="navbar">
      <div className="favicon">
        <img src={favicon} alt="logo" />
        <p>
          Let's <br />
          Chat
        </p>
      </div>

      <div className="profileinfo">
        <img src={currentUser.photoURL} alt="profilelogo" />
        <p className="profilename">{currentUser.displayName}</p>
      </div>
      <button
        onClick={handleSubmit}
        className="logout"
      >
        Log Out
      </button>
    </div>
  );
};

export default Navbar;
