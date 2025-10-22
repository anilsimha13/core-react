import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  let [initialClick, setInitialClick] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              initialClick === "Login"
                ? setInitialClick("Logout")
                : setInitialClick("Login");
            }}
          >
            {initialClick}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
