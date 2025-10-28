import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  let [initialClick, setInitialClick] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              to="/cart"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Cart
            </Link>
          </li>
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
