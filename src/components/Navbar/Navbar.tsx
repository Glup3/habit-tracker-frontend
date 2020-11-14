import React from 'react';
import { Link } from 'react-router-dom';
import { NavbarStyle } from './NavbarStyle';

function Navbar() {
  return (
    <NavbarStyle>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/habits">Habits</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </NavbarStyle>
  );
}

export default Navbar;
