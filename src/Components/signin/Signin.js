import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "./SignIn.css";


export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  let history = useHistory();

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
      let user = res.data.data
      let token = res.data.token
      console.log(res.data);
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('token', JSON.stringify(token))
      setUser(user);


      history.push("/dashboard")

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid">
      <div className="getblood">
        <img src="../../../img/getblood.jpeg" alt="" />
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
          <p>Welcome Back</p>

          <form className="col-g-3" onSubmit={handleSignin}>
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
