import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Request from "./Components/Request";
import Signin from "./Components/Signin";
import Signup from "./Components/signup/Signup";
import Home from "./Components/home/Home";
import Footer from "./Components/Footer";
import RequestPage from "./Components/RequestPage";
import "./App.css";

function App() {

  return (
    <div>

      <Switch>
        <Route path="/requestpage">
          <RequestPage />
        </Route>
        <Route path="/request">
          <Request />
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
