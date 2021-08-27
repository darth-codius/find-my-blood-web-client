import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Signin({ user, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async (e) => {
    e.preventDefault();
    console.log("submitted");
    try {
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/login",
        {
          email,
          password,
        }
      );
      console.log(res);
      setUser(user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="getblood">
        <img src="../../../img/getblood.jpeg" alt="" />
      </div>
      <div class="row">
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
          <p>Welcome Back</p>

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
              ></input>
            </div>
            <div className="p2">
              <p>Forgot password?</p>
            </div>
          </form>

          <button className="button1" type="sunmit" onClick={handleSignin}>
            LOGIN
          </button>
          <p>
            Need an account?
            <Link to="/signup" className="signup">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
