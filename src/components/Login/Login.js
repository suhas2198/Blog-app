import React from 'react'
import "../Login/login.css"

function Login() {
  return (
    <div className='login'>
        <span className="loginTitle">Login</span>
        <form className='loginForm'>
            <label>Email</label>
            <input type="text" placeholder="Enter your Email..." />
            <label>Password</label>
            <input type="text" placeholder="Enter your Password..."/>
            <button className='loginButton'>Login</button>

        </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login