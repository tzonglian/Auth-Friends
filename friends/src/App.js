import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import FriendList from "./components/FriendList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link to="/login">Login</Link>
          </nav>
        </header>
        <h1>My Secret Friends! ^_^ </h1>
        <Switch>
          <PrivateRoute
            exact
            path="/protected"
            render={(props) => <FriendList {...props} />}
          />
          <Route path="/login" render={(props) => <Login {...props} />} />
        </Switch>
      </div>
    </>
  );
}

export default App;
