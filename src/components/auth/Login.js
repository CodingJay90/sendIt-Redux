import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginUser } from "../../redux/actions/authActions";
import LoadingButton from "../common/LoadingButton";
import "./Auth.css";

const Login = (props) => {
  const { loginUser, msg, isLoading } = props;
  toast.configure();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const body = { email: values.email, password: values.password };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(body);
  };

  return (
    <div>
      <div className="form">
        <h1>Log in</h1>
        {msg !== "" && toast.error(msg)}
        <div className="layer">
          <form
            onSubmit={handleSubmit}
            style={{
              boxShadow: msg !== "" && " 0 0 10px rgba(196, 12, 12, 0.5)",
            }}
          >
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={onChange}
            />
            {/* <LoadingButton /> */}
            {isLoading ? (
              <LoadingButton />
            ) : (
              <button className="submit-btn">Submit</button>
            )}

            <p>
              Do not have an account ? <Link to="/register">Sign Up</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    token: state.auth.token,
    currentUser: state.auth.currentUser,
    isLoading: state.auth.isLoading,
    success: state.auth.success,
    userInfo: state.auth.userInfo,
    msg: state.auth.msg,
  };
}

const mapDispatchToProps = {
  loginUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
