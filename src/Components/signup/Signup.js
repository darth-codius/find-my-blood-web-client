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
      // eslint-disable-next-line
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/signup",
        {
          name,
          email,
          password,
          confirmPassword,
        }
      );
      if(res.status === 200) window.location.href = '/login'

    } catch (error) {
      console.error(error);
      alert('Registration Failed, Email already exists, Try Again');
    }
  };

  return (
    <div className="row flex-fill">
      
      <div className="row-container flex-fill">
        <div className="col-5">
          <div className="row-container">
            <img src="../../../img/logo.svg" alt="" />
          </div>
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
          <p className="pdonor1">Create an account</p>

          <form className="col-g-4" onSubmit={handleSignup}>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label pdonor1">
                Hospital Name
              </label>
              <input
                type="text"
                className="form-control registeri"
                id="inputName4"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputEmail4" className="form-label pdonor1">
                Email Address
              </label>
              <input
                type="email"
                className="form-control registeri"
                id="inputEmail4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
            </div>

            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label pdonor1">
                Password
              </label>
              <input
                type="password"
                className="form-control registeri"
                id="inputPassword"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputPassword" className="form-label pdonor1">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control registeri"
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
          <p className="pdonor1">
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
