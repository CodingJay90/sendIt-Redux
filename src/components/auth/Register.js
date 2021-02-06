import React from "react";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Auth.css";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

const Register = (props) => {
  const { registerUser } = props;
  console.log(props);
  toast.configure();

  const [values, setValues] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_no: "",
  });

  const body = {
    first_name: values.first_name,
    last_name: values.last_name,
    email: values.email,
    phone_no: values.phone_no,
    password: values.password,
  };
  const history = useHistory();
  const onChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    console.log(values);
    e.preventDefault();
    registerUser(body);
  };

  return (
    <div>
      <div className="form">
        <h1>Sign Up</h1>
        <div className="layer">
          <form onSubmit={handleSubmit}>
            <label htmlFor="first_name">First Name</label>
            <input
              type="text"
              onChange={onChange}
              name="first_name"
              placeholder="First Name"
            />
            <label htmlFor="last_name">Last Name</label>
            <input
              type="text"
              onChange={onChange}
              name="last_name"
              placeholder="Last Name"
            />
            <label htmlFor="email">Email</label>
            <input
              type="text"
              onChange={onChange}
              name="email"
              placeholder="Email address"
            />
            <label htmlFor="phone_no">Mobile No</label>
            <input
              type="text"
              onChange={onChange}
              name="phone_no"
              placeholder="Mobile no"
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              onChange={onChange}
            />
            <button>Submit</button>
            <p>
              Already had an account ? <Link to="/login">Log in</Link>
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
  registerUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
