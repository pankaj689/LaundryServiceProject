import React from "react";

import "../styles/login.css";
const Login = (props) => {
  return (
    <>
      <div className="container">
        <div className="asideLeft">
          <div className="asideLeftHeader">
            <h1>Laundry Service</h1>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="asideLeftFooter">
            <p>Don’t Have An Account?</p>
            <button className="signinButton">Register</button>
          </div>
        </div>
        <aside className="right-box">
          <h1>SIGN IN</h1>
          <form className="login-form">
            <input
              type="text"
              name="userID"
              placeholder="Mobile/Email"
              required
            />{" "}
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />{" "}
            <br />
            <span>Forget Password?</span> <br />
            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
        </aside>
      </div>
    </>
  );
};
export default Login;
