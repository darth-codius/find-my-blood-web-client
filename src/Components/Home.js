import React from 'react'


export default function Home() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navblood">
        <a className="navbar-brand" href="..">
          <img src="../../../img/blood 1.png" alt="" />
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button type="button" className="navbutton">
                Login
              </button>
            </li>
            <li class="nav-item">
              <button type="button" className="navbutton1">
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div class="card mb-3" className="card1">
        <div class="row g-0">
          <div class="col-md-6">
            <div class="card-body" className="card2">
              <h1 class="card-title" className="cardtittle">
                Get blood, Save Lives
              </h1>
              <p class="card-text" className="cardtext">
                We are linked by blood, and blood is memory without language
              </p>
              <button type="button" className="button3">
                Get Started
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <img
              src="../../../img/Laboratory-pana.svg"
              class="img-fluid rounded-start"
              alt="..."
            />
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="../../../img/Double Iphones 2.svg" alt="..." />
          </div>
          <div class="col-md-6">
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

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h1 className="title1">How it works?</h1>
            <span className="span1"></span>
            <ul className="list">
              <li>Get started by signing up.</li>
              <li>Find blood banks around your location.</li>
              <li>Make a requst for blood to save lives. </li>
            </ul>
            <button className="button5">Make a Request</button>
          </div>
          <div class="col-md-6">
            <img src="../../../img/Single Iphone 2.svg" alt="single Iphone" />
          </div>
        </div>
      </div>
    </div>
  );
}
