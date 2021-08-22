import React from "react";

export default function Signup() {
  return (
    <div className="row flex-fill">
      <div className="container ">
        <img src="../../../img/logo.svg" alt="" />
      </div>
      <div className="container row">
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

          <form class="col-g-4">
            <div class="col-md-6">
              <label for="inputEmail4" class="form-label">
                Hospital Name
              </label>
              <input type="name" class="form-control" id="inputName4"></input>
            </div>
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
            <div class="col-md-6">
              <label for="inputPassword" class="form-label">
                Confirm Password
              </label>
              <input
                type="text"
                class="form-control"
                id="inputPassword"
              ></input>
            </div>
          </form>

          <button className="button2">Register</button>
          <p>
            Already have an account?<span className="signin1">Login</span>
          </p>
        </div>
      </div>
    </div>
  );
}
