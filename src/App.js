import "./App.css";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import RequestPage from "./Components/RequestPage";
import SentRequests from "./Components/SentRequests";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "./Components/Signin";
import Landing from "./Components/Landing";
import Signup from "./Components/Pages/Success";
import Request from "./Components/Pages/Request";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/landing" exact>
          <Landing />
        </Route>
        <Route path="/login" exact>
          <Signin />
        </Route>
        <Route path="/signup" exact>
          <Signup />
        </Route>
        <Route path="/request" exact>
          <Request />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
