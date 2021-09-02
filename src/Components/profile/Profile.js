import React from 'react'
import './Profile.css'

function Profile() {
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
                <img src="../../../img/Profile.svg" alt="" />
              </li>
            </ul>
          </div>
        </nav>

        <div className="profile-container">
          <div class="container">
            <div class="row">
              <div class="col-md-5">
                <button className="profilebutton">
                  <img src="../../../img/Arrow 2.svg" alt="" /> Back
                </button>
              </div>
              <div class="col">
                <img src="../../../img/Group 590.svg" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <strong>Name:</strong>
            </div>
            <div class="col">Okwe General Hospital, Asaba</div>
          </div>
          <div class="row">
            <div class="col-md-3"><strong>Motto:</strong></div>
            <div class="col">
              We Save Lives Because We Care And They Matter To Us
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><strong>Address:</strong></div>
            <div class="col">
              144 Mariam Babangida road, Asaba, Delta State.
            </div>
          </div>
          <div class="row">
            <div class="col-md-3"><strong>Email Address:</strong></div>
            <div class="col">okwegeneralhospital@gmail.com</div>
          </div>
          <div class="row">
            <div class="col-md-3"><strong>Phone Number:</strong></div>
            <div class="col">+234 7041659382</div>
          </div>
        </div>
        
        <div className="profile-container1">
        <h3 className="profile-text">AVAILABLE UNITS</h3>

        <table class="table table-sm">
          <thead>
            <tr class="bg-danger text-center">
              <th scope="col"></th>
              <th scope="col">Blood Bank</th>
              <th scope="col">Location</th>
              <th scope="col">Capacity</th>
              <th scope="col">Blood Group</th>
            </tr>
          </thead>
        </table>
        </div>
        
      </div>
    );
}

export default Profile