import React from "react";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <a href="./index.html">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </a>
  </header>
);

export default Header;
