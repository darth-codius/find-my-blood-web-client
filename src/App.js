import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Dashboard from "./Components/dashboard/Dashboard";
import Signin from "./Components/signin/Signin";
import Signup from "./Components/signup/Signup";
import Home from "./Components/home/Home";
import Footer from "./Components/footer/Footer";
import RequestPage from "./Components/requestpage/RequestPage";
import IncomingRequest from "./Components/incomingrequest/IncomingRequest";
import SentRequests from "./Components/sentrequest/SentRequests";
import Profile from "./Components/profile/Profile";
import Success from "./Components/successpage/Success";
import Error from "./Components/errorpage/Errorpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/incomingrequest" exact>
            <IncomingRequest />
          </Route>
          <Route path="/sentrequest" exact>
            <SentRequests />
          </Route>
          <Route path="/requestpage" exact>
            <RequestPage />
          </Route>
          <Route path="/dashboard" exact>
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
          <Route path="/success" exact>
            <Success />
          </Route>
          <Route path="/error">
            <Error />
          </Route>
          <Redirect to="/error" />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
