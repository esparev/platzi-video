import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutRequest } from "../actions";
import "../assets/styles/components/Header.scss";
import logo from "../assets/static/logo-platzi-video.png";
import userIcon from "../assets/static/user-icon.png";

const Header = (props) => {
  const { user } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    document.cookie = "email=";
    document.cookie = "name=";
    document.cookie = "id=";
    document.cookie = "token=";
    props.logoutRequest({});
    window.location.href = "/login";
  };

  return (
    <header className="header">
      {hasUser ? (
        <Link to="/">
          <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
      ) : (
        <img className="header__img" src={logo} alt="Platzi Video" />
      )}
      {hasUser ? (
        <div className="header__menu">
          <div className="header__menu--profile">
            <img src={userIcon} alt="User Icon" />
            <p>Profile</p>
          </div>
          <ul className="header__menu--list">
            <li>
              <Link to="/account">{user.name}</Link>
            </li>
            <li>
              <Link to="/login" onClick={handleLogout}>
                Log out
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
