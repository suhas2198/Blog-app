import React from "react";
import me from "../../shared/images/me.png"

import "../Settings/settings.css";
import Sidebar from "../Sidebar";
function Settings() {
  return (
    <div className="settings">
      <div className="settingwrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form action="" className="settingsForm">
            <label> Profile Picture</label>
            <div className="settingsPP">
                <img src={me}  alt="" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />

            </div>
            <label> UserName</label>
            <input type="text" placeholder="Suhas" />
            <label> Email</label>
            <input type="text" placeholder="suhas@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
}

export default Settings;
