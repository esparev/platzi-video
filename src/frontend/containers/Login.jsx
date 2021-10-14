import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../actions';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-logo.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import facebookIcon from '../assets/static/facebook-icon.png';

const Login = (props) => {
  useEffect(() => {
    document.title = 'PlatziVideo • Log In';
  }, []);

  const [form, setValues] = useState({
    email: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginUser(form, '/');
  };

  return (
    <section className='login'>
      <div className='login__container'>
        <h2>Log In to PlatziVideo</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='login-input'
            type='text'
            placeholder='Email'
            onChange={handleInput}
          />
          <input
            name='password'
            className='login-input'
            type='password'
            placeholder='Password'
            onChange={handleInput}
          />
          <button className='button' type='submit'>
            Log In
          </button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='checkbox' />
              Remember Me
            </label>
            <Link to='/recover'>Forgot my password</Link>
          </div>
        </form>
        <div className='login__container--social-media'>
          <div className='login__container--continue-button google'>
            <img src={googleIcon} alt='Google Icon' />
            Continue with Google
          </div>
          <div className='login__container--continue-button twitter'>
            <img src={twitterIcon} alt='Twitter Icon' />
            Continue with Twitter
          </div>
          <div className='login__container--continue-button facebook'>
            <img src={facebookIcon} alt='Facebook Icon' />
            Continue with Facebook
          </div>
        </div>
        <p className='login__container--register'>
          Don&apos;t have an account yet? <Link to='/register'>Register</Link>
        </p>
      </div>
    </section>
  );
};

const mapDispatchToProps = {
  loginUser,
};

Login.propTypes = {
  loginUser: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Login);
