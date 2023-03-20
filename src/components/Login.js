import React, { useRef } from 'react';
import '../css/signup&login.css';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const login = () => {
    const { email, password } = getInputs();
    if (isUserCredentialsValid(email, password)) {
      alert('Welcome admin@codecourses.site');
    } else {
      alert('Your email or password is not correct');
    }
  };

  const getInputs = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    return { email, password };
  };

  const isUserCredentialsValid = (email, password) => {
    return email === 'admin@codecourses.site' && password === '123456';
  };

  return (
    <div className="loginContainer">
      <div className="loginWelcome">
        <p>
          Welcome To{' '}
          <span style={{ color: '#0B65C2', fontWeight: 'bold' }}>
            Login In{' '}
          </span>
          Blog
        </p>
      </div>
      <div className="loginFormContainer">
        <div className="loginForm">
          <input
            type="text"
            placeholder="Email or phone number"
            ref={emailRef}
          />
          <input type="password" placeholder="Password" ref={passwordRef} />
          <button className="loginSubmitBtn" onClick={login}>
            Login
          </button>
          <span className="loginForgotPassword">Forgot password?</span>
          <span className="loginSignup">Create New Account</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
