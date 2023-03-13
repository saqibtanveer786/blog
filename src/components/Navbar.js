import React from 'react';
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
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="signInUp">
        <ul>
          <li>
            <a href="/">Sign In</a>
          </li>
          <li>
            <a href="/">Sign Up</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
