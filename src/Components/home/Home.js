import React from 'react'


import './Home.css'


export default function Home() {

  const goToLogin = (event) => {
    window.location.href = "/login"
  }

  const goToSignup = (event) => {
    window.location.href = "/signup"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navblood">
        <a className="navbar-brand" href="/">
          <img src="../../../img/blood 1.svg" alt="" />
          <h6 className="getblood">GET BLOOD</h6>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <button type="button" className="navbutton" onClick={goToLogin}>
                Login
              </button>
            </li>
            <li className="nav-item active">
              <button type="button" className="navbutton1" onClick={goToSignup}>
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="row-container">
        <div className="row flex-fill">
          <div className="col-md-5">
            <div className="card-body card-body">
              <h1 className="card-title cardtittle">
                Get blood, Save Lives
              </h1>
              <p className="card-text cardtext">
                We are linked by blood, and blood is memory without language
              </p>
              <button type="button" className="button3">
                Get Started
              </button>
            </div>
          </div>
          <div className="col-md-5 img-container">
            <img
              src="../../../img/Laboratory-pana.svg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div className="row-container">
        <div className="row flex-fill">
          <div className="col-md-5 img-container">
            <img src="../../../img/Double Iphones 2.svg" alt="..." />
          </div>
          <div className="col-md-5">
            <h1 className="title1">Download our mobile app</h1>
            <span className="span1"></span>

            <p className="title2">
              Our dedicated hospital engagement app and web portal allow you to
              access information instantaneously (no tedious form, long calls,
              or administrative hassle) and securely
            </p>
            <button type="button" className="button4">
              Download App
            </button>
          </div>
        </div>
      </div>

      <div className="row-container">
        <div className="row flex-fill">
          <div className="col-md-5">
            <h1 className="title1">How it works?</h1>
            <span className="span1"></span>
            <ul className="list">
              <li>Get started by signing up.</li>
              <li>Find blood banks around your location.</li>
              <li>Make a request for blood to save lives. </li>
            </ul>
            <button className="button4">Make a Request</button>
          </div>
          <div className="col-md-5 img-container">
            <img src="../../../img/Single Iphone 2.svg" alt="single Iphone" />
          </div>
        </div>
      </div>
    </div>
  );
}
