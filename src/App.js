import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import "./App.css";
import UserDashBoard from "./components/userDashBoard/UserDashBoard";
import Register from "./components/auth/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/userDashboard" component={UserDashBoard} />
        <Route path="/register" component={Register} />
      </Switch>
    </div>
  );
}

export default App;
