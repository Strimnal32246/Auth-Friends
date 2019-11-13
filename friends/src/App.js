import React from "react";
import "./App.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriends";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="links">
          <Link to="/">Login</Link>
          <br></br>
          <Link to="/friends">Your Friends</Link>
          <br></br>
          <Link to="/newfriend">Add a friend!</Link>
          <br></br>
        </div>
        <div>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/newfriend" component={NewFriend} />
        </div>
      </Router>
    </div>
  );
}

export default App;
