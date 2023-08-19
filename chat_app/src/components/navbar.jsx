import React, { useContext} from "react";
import favicon from "../img/falcon.png";
import { authContext } from "../context/authContex";
import { useNavigate } from "react-router";
import LogoutIcon from '@mui/icons-material/Logout';

const Navbar = () => {
  const { currentUser,loggingOut } = useContext(authContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try{
      console.log("Logging out");
      await loggingOut();
      console.log('Logged out');
      console.log("Navbar:- ");
      console.log(currentUser);
      navigate("/login");
    }catch(e){
      console.log("Error occurred while Logging Out");
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
      <LogoutIcon onClick={handleSubmit} className="logout"></LogoutIcon>
    </div>
  );
};

export default Navbar;
