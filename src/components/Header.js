import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [initialClick, setInitialClick] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  //selector
  // Subscribe to the store
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border border-gray-300 shadow-lg p-4 bg-orange-600 mb-2 bg-linear-to-r from-red-400 via-pink-500 to-violet-500 ">
      <Link to="/" className="logo-container group relative block">
        <img
          className="w-56 transition-transform duration-300 hover:scale-110 hover:rotate-3 hover:animate-bounce cursor-pointer"
          src={LOGO_URL}
          alt="Food Villa Logo"
        ></img>
        <div className="hidden group-hover:block absolute left-0 top-0 w-full">
          <span className="absolute left-0 animate-[ping_1s_ease-in-out_infinite] text-2xl">
            🎉
          </span>
          <span className="absolute left-1/2 -translate-x-1/2 animate-[bounce_1s_ease-in-out_infinite] text-2xl">
            ✨
          </span>
          <span className="absolute right-0 animate-[ping_1.2s_ease-in-out_infinite] text-2xl">
            🎊
          </span>
          <span className="absolute left-1/4 animate-[bounce_1.3s_ease-in-out_infinite] text-2xl">
            🎈
          </span>
          <span className="absolute right-1/4 animate-[ping_0.9s_ease-in-out_infinite] text-2xl">
            🌟
          </span>
        </div>
      </Link>
      <div className="nav-items">
        <ul className="flex space-x-4 text-xl items-center">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
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
              🛒 ({cartItems.length} Items)
            </Link>
          </li>
          <li>
            <Link
              to="/grocery"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Grocery
            </Link>
          </li>
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold px-4 rounded-xl cursor-pointer"
            onClick={() => {
              initialClick === "Login"
                ? setInitialClick("Logout")
                : setInitialClick("Login");
            }}
          >
            {initialClick}
          </button>
          <li className="ml-4 font-bold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
