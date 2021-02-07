import { Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import UserDashBoard from "./components/userDashBoard/UserDashBoard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/authActions";
import { useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadParcels } from "./redux/actions/parcelActions";

function App() {
  toast.configure();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadParcels());
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route
          path="/userDashboard"
          render={() => {
            if (!isAuthenticated && !token) {
              toast.error(
                "You are not authenticated, you need to be logged in to viiew this page"
              );
              setTimeout(() => {
                <Redirect to="/login" />;
              }, 2000);
            } else return <UserDashBoard />;
          }}
        /> */}
        <Route path="/userDashboard">
          {!token ? <Redirect to="/login" /> : <UserDashBoard />}
        </Route>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
