import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  toast.configure();
  const activeStyle = { borderBottom: " 5px solid rgba(255, 255, 255, 0.2)" };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const history = useHistory();

  function logout() {
    localStorage.removeItem("token");
    toast.success("Logging you out");
    setTimeout(() => {
      history.push("/");
      window.location.reload();
    }, 1500);
  }

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
          {isAuthenticated ? (
            <ul>
              <li>
                <NavLink
                  to="/register"
                  activeStyle={activeStyle}
                  className="auth"
                >
                  {" "}
                  {currentUser}
                </NavLink>
              </li>
              <li onClick={logout}>
                <span type="button" activeStyle={activeStyle} className="auth">
                  Logout
                </span>
              </li>
            </ul>
          ) : (
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
          )}
        </nav>
      </header>
    </>
  );
};

export default Navbar;
