import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/user-icon.png";

const Header = () => (
  <header className="header">
    <Link to="/">
      <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="User Icon" />
        <p>Profile</p>
      </div>
      <ul>
        <li>
          <Link to="/account">Account</Link>
        </li>
        <li>
          <Link to="/login">Log out</Link>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
