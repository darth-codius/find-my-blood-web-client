import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from "./Components/dashboard/Dashboard";
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/Signup";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import RequestPage from "./Components/requestpage/RequestPage";
import SentRequests from "./Components/sentrequest/SentRequests";
import Profile from "./Components/profile/Profile"
import "./App.css";

function App() {

  return (
    <div>

      <Switch>
        <Route path="/profile">
          <Profile/>
        </Route>
        <Route path="/sentrequest">
          <SentRequests/>
        </Route>
        <Route path="/requestpage">
          <RequestPage />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/login">
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
