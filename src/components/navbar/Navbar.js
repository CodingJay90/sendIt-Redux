import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import "./Navbar.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Navbar = () => {
  toast.configure();
  const activestyle = { borderBottom: " 5px solid rgba(255, 255, 255, 0.2)" };
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
              <NavLink to="/" exact activestyle={activestyle} className="brand">
                {" "}
                SendIt
              </NavLink>
            </li>
          </ul>
          {isAuthenticated ? (
            <ul>
              <li>
                <NavLink
                  to="/"
                  activestyle={activestyle}
                  className="auth"
                >
                  {" "}
                  {currentUser}
                </NavLink>
              </li>
              <li onClick={logout}>
                <span type="button" activestyle={activestyle} className="auth">
                  Logout
                </span>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink
                  to="/register"
                  activestyle={activestyle}
                  className="auth"
                >
                  {" "}
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" activestyle={activestyle} className="auth">
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
