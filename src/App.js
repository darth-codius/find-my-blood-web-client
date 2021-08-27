import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Request from "./Components/Request";
import Signin from "./Components/Signin";
import Signup from "./Components/signup/Signup";
import Home from "./Components/home/Home";
import "./App.css";

function App() {
  const [user, setUser] = useState("");

  return (
    <div>
      {user ? (
        <Request />
      ) : (
        <Switch>
          <Route exact path="/login" user={user} setUser={setUser}>
            <Signin />
          </Route>
          <Route path="/signup" exact user={user} setUser={setUser}>
            <Signup />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      )}
    </div>
  );
}

export default App;
