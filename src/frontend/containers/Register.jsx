import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { registerUser } from "../actions";
import "../assets/styles/components/Login.scss";

const Register = (props) => {
  useEffect(() => {
    document.title = "PlatziVideo • Register";
  }, []);

  const [form, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerUser(form, "/login");
  };

  return (
    <section className="login">
      <div className="login__container">
        <h2>Register to PlatziVideo</h2>
        <form className="login__container--form" onSubmit={handleSubmit}>
          <input
            name="name"
            className="login-input"
            type="text"
            placeholder="Name"
            onChange={handleInput}
          />
          <input
            name="email"
            className="login-input"
            type="text"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            className="login-input"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <button className="button" type="submit">
            Register
          </button>
        </form>
        <p className="login__container--register">
          Already have an account?
          {" "}
          <Link to="/login">Log In</Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(Register);
