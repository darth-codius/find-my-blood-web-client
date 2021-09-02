import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Signin.css";
import axios from "axios";

export default function Signin() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");

  let history = useHistory();

  const handleSignin = async (e) => {
     e.preventDefault(); 
     console.log("submitted");
     try {
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/login",
        {
          password,
          email,
        }
      );
      let user = res.data.data
      let token = res.data.token
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))
      setUser(user);

      history.push("/Request")
    }
    catch (error) {
      console.error(error);
    }
    };
     
  return (
    <div className="container-fluid">
      <div className="getblood">
        <img src="../../../img/getblood.jpeg" alt="" />
      </div>
      <div class="row signin-row">
        <div class="col">
          <div className="image">
            <img src="../../../img/Blood donation-rafiki.svg" alt="" />
            <p className="pimg">
              One print of blood can save up to three lives
            </p>
          </div>
        </div>
        <div class="col">
          <div className="heading">
            <h1>LOGIN</h1>
          </div>
          <p className="back">Welcome Back</p>

          <form class="col-g-3" onSubmit={handleSignin}>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email Address
              </label>
              <input 
              type="email" 
              class="form-control" 
              id="inputEmail4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              ></input>
            </div>

            <div class="col-md-6">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
            </div>
            <div className="p2">
              <p>Forgot password?</p>
            </div>
          </form>

          <button className="button1">LOGIN</button>
          <p>
            Need an account?<Link to="/Signup" className="signup">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
