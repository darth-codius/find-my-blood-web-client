import React from "react";

export default function Home() {
  return (
    <div>
      <nav className="homenav">
        <div className="nav1">
          <h6>GET BLOOD</h6>
        </div>
        <div className="buttonnav">
          <button type="button" class="btn btn-outline-danger">
            Login
          </button>
          <button type="button" class="btn btn-outline-danger">
            Register
          </button>
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

      <div className="card3">
        <div className="card03">
          <img src="../../../img/Double Iphones 2.svg" alt="..." />
        </div>
        <div className="card4">
          <h1 className="title1">Download our mobile app</h1>
          <span className="span1"></span>

          <p className="title2">
            Our dedicated hospital engagement app and web portal allow you to
            access information instantaneously (no tedious form, long calls, or
            administrative hassle) and securely
          </p>
          <button type="button" className="button4">
            Download App
          </button>
        </div>
      </div>

      <div className="card5">
        <div className="card05">
          <h1>How it works?</h1>
          <span className="span1"></span>
          <ul className="list">
            <li>Get started by signing up.</li>
            <li>Find blood banks around your location.</li>
            <li>Make a requst for blood to save lives. </li>
          </ul>
          <button className="button5">Make a Request</button>
        </div>
        <div className="card105">
          <img src="../../../img/Single Iphone 2.svg" alt="single Iphone" />
        </div>
      </div>

      <footer class="container-fluid">
        <div class="row row-cols-4">
          <div class="col-5">
            <h7>GET BLOOD</h7>
            <p>
              Get blood provides progressive ways to locate blood easily,
              accessible on mobile and online for everyone
            </p>
            <p>©Find My Blood. All rights reserved</p>
          </div>
          <div class="col-3">
            <h7>Navigation</h7>
            <p>Search</p>
            <p>Notification</p>
            <p>My Account</p>
          </div>
          <div class="col-2">
            <h7>Follow Us</h7>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>facebook</p>
          </div>
          <div class="col-2">
            <h7>Terms & Policies</h7>
            <p>Privacy Policies</p>
            <p>Terms & conditions</p>
          </div>
        </div>
      </footer>

      <footer class="row row-cols-5 py-5 my-5 border-top">
        <div class="col">
          <h5>GET BLOOD</h5>
          <p>
            Get blood provides progressive ways to locate blood easily,
            accessible on mobile and online for everyone
          </p>
          <p class="text-muted">©Find mY blood.All rights reserved</p>
        </div>

        <div class="col"></div>

        <div class="col">
          <h5>Navigation</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Search
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Notification
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                My Account
              </a>
            </li>
            
          </ul>
        </div>

        <div class="col">
          <h5>Foolow Us</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Instagram
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Twitter
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Facebook
              </a>
            </li>
            
          </ul>
        </div>

        <div class="col">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Home
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Features
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                Pricing
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                FAQs
              </a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
