import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const activeStyle = { borderBottom: " 5px solid rgba(255, 255, 255, 0.2)" };
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeStyle={activeStyle} className="brand">
                {" "}
                SendIt
              </NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink
                to="/register"
                activeStyle={activeStyle}
                className="auth"
              >
                {" "}
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeStyle={activeStyle} className="auth">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
