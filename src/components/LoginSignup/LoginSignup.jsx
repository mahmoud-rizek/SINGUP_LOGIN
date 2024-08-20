import React from "react";
import { useState } from "react";
import "./LoginSignup.css";

// Material UI Icons
import PasswordIcon from "@mui/icons-material/Password";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";

export const LoginSignup = () => {
  const [actino, setAction] = useState("Login");
  return (
    <div className="container">
      <div className="header">
        <div className="text">{actino}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {actino === "Sign Up" ? (
          <div className="input">
            {/* name icon */}
            <PersonIcon className="icon" />
            <input type="text" placeholder="Enter Your Name" />
          </div>
        ) : (
          <div></div>
        )}

        <div className="input">
          {/* email icon */}
          <EmailIcon className="icon" />
          <input type="email" placeholder="Enter Your Email" />
        </div>
        <div className="input">
          {/* password icon */}
          <PasswordIcon className="icon" />
          <input type="password" placeholder="Enter Password" />
        </div>
        {actino === "Sign Up" ? (
          <div className="input">
            <PasswordIcon className="icon" />
            <input type="password" placeholder="Confirm Password" />
          </div>
        ) : (
          <div></div>
        )}

        {actino === "Login" ? (
          <div className="forgot-password">
            Lost Password? <span>Click here!</span>
          </div>
        ) : (
          <div></div>
        )}

        <div className="submit-container">
          <div
            className={actino === "Login" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Sign Up");
            }}
          >
            Sign Up
          </div>
          <div
            className={actino === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => {
              setAction("Login");
            }}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};
