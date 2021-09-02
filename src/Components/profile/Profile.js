import React from 'react';
import { Link } from "react-router-dom";
import './Profile.css';

function Profile() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navblood">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <img src="../../../img/Profile.svg" alt="" />
            </li>
          </ul>
        </div>
      </nav>

      <div className="profile-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <Link to="/dashboard">
                <button className="profilebutton">
                  <img src="../../../img/Arrow 2.svg" alt="" /> Back
                </button>
              </Link>
            </div>
            <div className="col">
              <img src="../../../img/Group 590.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <strong>Name:</strong>
          </div>
          <div className="col">Okwe General Hospital, Asaba</div>
        </div>
        <div className="row">
          <div className="col-md-3"><strong>Motto:</strong></div>
          <div className="col">
            We Save Lives Because We Care And They Matter To Us
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"><strong>Address:</strong></div>
          <div className="col">
            144 Mariam Babangida road, Asaba, Delta State.
          </div>
        </div>
        <div className="row">
          <div className="col-md-3"><strong>Email Address:</strong></div>
          <div className="col">okwegeneralhospital@gmail.com</div>
        </div>
        <div className="row">
          <div className="col-md-3"><strong>Phone Number:</strong></div>
          <div className="col">+234 7041659382</div>
        </div>
      </div>

      <div className="profile-container1">
        <h3 className="profile-text">AVAILABLE UNITS</h3>

        <table className="table table-sm">
          <thead>
            <tr className="bg-danger text-center">
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