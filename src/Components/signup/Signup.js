import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Signup.css'
import axios from "axios"


export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

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
      if (res.status === 200) window.location.href = '/login'

    } catch (error) {
      console.error(error);
      alert('Registration Failed, Email already exists, Try Again');
    }
  };

  return (
    <div className="row flex-fill">


      <div className="row align-items-center">
        <div className="col">
          <div className="signinheader">
            <img src="../../../img/blood 1.svg" alt="" />
            <h6 className="getblood">GET BLOOD</h6>
          </div>
          <div>
            <img src="../../../img/Group 745signup.svg" alt="" />
            <p className="pdonor1">
              Nearly 7% of the body weight of a human is made up of blood.
            </p>
          </div>
        </div>
        <div className="col">
          <div className="regform">
            <div className="heading">
              <h1>Register</h1>
            </div>
            <p className="pdonor1">Create an account</p>

            <form onSubmit={handleSignup}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label pdonor1">Hospital Name</label>
                <input type="text" className="form-control registeri" id="exampleInputEmail1" aria-describedby="emailHelp" value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />

              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label pdonor1">Email Address</label>
                <input type="email" className="form-control registeri" id="exampleInputPassword1" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label pdonor1">Password</label>
                <input type="password" className="form-control registeri" id="exampleInputPassword1" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label pdonor1">Confirm Password</label>
                <input type="password" className="form-control registeri" id="exampleInputPassword1" value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required />
              </div>

              <button className="button21" type="submit" onClick={handleSignup}>
                Register
              </button>
              <p className="pdonor1">
                Already have an account?
                <Link to="/Login" className="signin1">
                  Login
                </Link>
              </p>

            </form>
          </div>
        </div>

      </div>



    </div>













  );
}

