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
      console.log(res)
      alert("Registration successful");


    } catch (error) {
      console.error(error);
      alert('Registration Failed, Email already exists, Try Again');
    }
  };

  return (
    <div className="row flex-fill">
      <div className="row-container">
        <img src="../../../img/logo.svg" alt="" />
      </div>
      <div className="row-container flex-fill">
        <div className="col-5">
          <div className="image">
            <img src="../../../img/Blooddonation.svg" alt="" />
            <p className="pdonor">
              Nearly 7% of the body weight of a human is made up of blood.
            </p>
          </div>
        </div>
        <div className="col-5">
          <div className="heading">
            <h1>Register</h1>
          </div>
          <p>Create an account</p>

          <form className="col-g-4" onSubmit={handleSignup}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Hospital Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputName4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
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
