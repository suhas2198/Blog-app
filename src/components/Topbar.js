import React from "react";
import "../styles/topbar.css";
import "font-awesome/css/font-awesome.min.css";
import me from "../shared/images/me.png";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItems">
            <Link to="/">Home</Link>
          </li>

          <li className="topListItems">
            <Link to="login">Login</Link>
          </li>
          <li className="topListItems">
            <Link to="/register">Register</Link>
          </li>
          <li className="topListItems">
            <Link to="/write">Write</Link>
          </li>
          <li className="topListItems">
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImage" src={me} alt="It's ME" />

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default Topbar;
