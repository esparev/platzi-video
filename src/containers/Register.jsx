import React from "react";
import Header from "../components/Header.jsx"
import Footer from "../components/Footer.jsx";
import "../assets/styles/components/Login.scss";

const Register = () => (
  <div>
    <Header />
    <section className="login">
      <div className="login__container">
        <h2 tabindex="1">Register to PlatziVideo</h2>
        <form className="login__container--form">
          <input className="login-input" type="text" placeholder="Name" />
          <input className="login-input" type="text" placeholder="Email" />
          <input
            className="login-input"
            type="password"
            placeholder="Password"
          />
          <button className="button">Register</button>
        </form>
        <p className="login__container--register">
          Already have an account? <a href="./login.html">Log In</a>
        </p>
      </div>
    </section>
    <Footer />
  </div>
);

export default Register;
