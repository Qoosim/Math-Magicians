import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Nav.css';

function Nav() {
  const activeStyle = {
    textDecoration: 'underline',
  };

  return (
    <header>
      <NavLink to="/" className="text-logo">Math Magicians</NavLink>
      <nav>
        <NavLink
          to="/"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/calculator"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Calculator
        </NavLink>
        <NavLink
          to="/quote"
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
        >
          Quote
        </NavLink>
      </nav>
    </header>
  );
}

export default Nav;
