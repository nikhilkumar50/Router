import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav>
      <div>Logo</div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
