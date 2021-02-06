import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import UserDashBoard from "./components/userDashBoard/UserDashBoard";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/authActions";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    dispatch(loadUser());
  }, [isAuthenticated]);

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userDashboard" component={UserDashBoard} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
