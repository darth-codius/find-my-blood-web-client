import React from "react";

export default function Signin() {
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
              One print of blood can save up to 
              three lives
            </p>
        </div>
        </div>
        <div class="col">
          <div className="heading">
            <h1>LOGIN</h1>
          </div>
          <p>Welcome Back</p>

          <form class="col-g-3">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Email Address
              </label>
              <input type="email" class="form-control" id="inputEmail4"></input>
            </div>

            <div class="col-md-6">
              <label for="inputPassword" class="form-label">
                Password
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword"
              ></input>
            </div>
            <div className="p2">
              <p>Forgot password?</p>
            </div>
          </form>

          <button className="button1">LOGIN</button>
          <p>
            Need an account?<span className="signup">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
}
