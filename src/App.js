import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Signin from './Components/Signin';
import Landing from './Components/Landing'
import Signup from './Components/Pages/Signup';

function App() {
  return (
    <div className="App">
      <Signup/>
    
    
    </div>
  );
}

export default App;
