import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./UserDashBoard.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserDashBoard = () => {
  toast.configure();
  const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error(
        "You are not authenticated, you need to be looged in to viiew this page"
      );
      setTimeout(() => {
        history.push("/login");
      }, 2000);
    }
  });
  return (
    <>
      <div className="container">
        <div className="hero">
          <h1>Dashboard</h1>
          <Link to="/createParcel" className="btn">
            Create Order
          </Link>
        </div>

        <div className="details">
          <div></div>
        </div>
        <h2>Orders</h2>
      </div>
    </>
  );
};

export default UserDashBoard;
