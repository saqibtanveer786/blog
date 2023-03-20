import React from 'react';
import { Link } from 'react-router-dom';

// CSS File
import '../css/navbar.css';

export default function Navbar() {
  return (
    <header>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
      <nav className="mainMenu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/allposts">All Posts</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
      <nav className="signInUp">
        <ul>
          <li>
            <Link to="/signup">Sign In</Link>
          </li>
          <hr />
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
