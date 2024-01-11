import React from "react";

import "../styles/header.css";
import dew4 from "../shared/images/dew4.jpg"

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React and Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src={dew4}
        alt="Dew img"
      />
    </div>
  );
}

export default Header;
