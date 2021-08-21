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
        <div>
          <div class="container">
            <div class="row">
              <div class="col">
                <button>
                  <img
                    src="../../../img/Arrow 2.svg"
                    alt=""
                  /> Back 
                </button>
              </div>
              <div class="col">Column</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Profile
