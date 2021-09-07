import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSignin = async () => {
    
    console.log("submitted");
    try {
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/login",
        {
          email,
          password,
        }
      );
      let user = res.data.data
      let token = res.data.token
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))

      history.push("/dashboard")

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="signinheader">
        <img src="../../../img/blood 1.svg" alt="" />
        <h6 className="getblood">GET BLOOD</h6>
      </div>
      <div className="row">
        <div className="col">
          <div className="image">
            <img src="../../../img/Blood donation-rafiki.svg" alt="" />
            <p className="pimg">
              One print of blood can save up to three lives
            </p>
          </div>
        </div>
        <div className="col">
          <div className="heading">
            <h1>LOGIN</h1>
          </div>
          <p className="pimg1">Welcome Back</p>

          <form className="col-g-3" onSubmit={handleSignin}>
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
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
                
              ></input>
            </div>
            <div className="p2">
              <p>Forgot password?</p>
            </div>
          </form>

          <button className="button1" type="sunmit" onClick={handleSignin}>
            LOGIN
          </button>
          <p className="pimg1">
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
