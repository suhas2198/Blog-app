import React from "react";
import "../Register/register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name</label>
        <input type="text" placeholder="Enter your UserName..." />
        <label>Email</label>
        <input type="text" placeholder="Enter your Email..." />
        <label>Password</label>
        <input type="text" placeholder="Enter your Password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">Login</button>
    </div>
  );
}

export default Register;
