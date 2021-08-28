import React from "react";
import "../assets/styles/components/Login.scss";
import googleIcon from "../assets/static/google-logo.png";
import twitterIcon from "../assets/static/twitter-icon.png";

const Login = () => (
  <section className="login">
    <div className="login__container">
      <h2 tabindex="1">Log In to PlatziVideo</h2>
      <form className="login__container--form">
        <input className="login-input" type="text" placeholder="Email" />
        <input className="login-input" type="password" placeholder="Password" />
        <button className="button">Log In</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="checkbox" />
            Remember Me
          </label>
          <a href="#">Forgot my password</a>
        </div>
      </form>
      <div className="login__container--social-media">
        <div>
          <img src={googleIcon} alt="Google Icon" />
          Continue with Google
        </div>
        <div>
          <img src={twitterIcon} alt="Twitter Icon" />
          Continue with Twitter
        </div>
      </div>
      <p className="login__container--register">
        Don't have an account yet? <a href="./register.html">Register</a>
      </p>
    </div>
  </section>
);

export default Login;
