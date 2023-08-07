import React, { useContext, useEffect } from "react";
import falcon from "../img/falcon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../context/authContex";

export const Login = () => {
  const { currentUser, loggingIn } = useContext(authContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(currentUser){
      alert("Already logged in");
      navigate("/");
    }
  },[currentUser]);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await loggingIn(email, password);
      console.log("Login successful");
      // console.log(currentUser);
      navigate("/");
    } catch (error) {
      console.log("Error Signing In");
    }
  };
  
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <img src={falcon} alt="logo"></img>
        <h2 className="login">Login</h2>

        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an Account?{" "}
          <i>
            <NavLink to="/register">Register</NavLink>
          </i>
        </p>
      </div>
    </div>
  );
};
