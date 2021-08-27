import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = async () => {
    try {
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      alert("Registration successful");
    
      
    } catch (error) {
      console.error(error);
      alert ('Registration Failed. Try Again');
    }
  };

  return (
    <div className="row flex-fill">
      <div className="row-container">
        <img src="../../../img/logo.svg" alt="" />
      </div>
      <div className="row-container flex-fill">
        <div class="col-5">
          <div className="image">
            <img src="../../../img/Blooddonation.svg" alt="" />
            <p className="pdonor">
              Nearly 7% of the body weight of a human is made up of blood.
            </p>
          </div>
        </div>
        <div class="col-5">
          <div className="heading">
            <h1>Register</h1>
          </div>
          <p>Create an account</p>

          <form class="col-g-4" onSubmit={handleSignup}>
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Hospital Name
              </label>
              <input
                type="text"
                class="form-control"
                id="inputName4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
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
              />
            </div>
            <div class="col-md-6">
              <label for="inputPassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </form>

          <button className="button2" type="submit" onClick={handleSignup}>
            Register
          </button>
          <p>
            Already have an account?
            <Link to="/login" className="signin1">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
