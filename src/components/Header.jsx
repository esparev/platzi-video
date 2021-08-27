import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <a href="./index.html">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </a>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User Icon" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <a href="../404.html">Account</a>
        </li>
        <li>
          <a href="../login.html">Log out</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
