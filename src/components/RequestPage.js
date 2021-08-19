import React from 'react'

function RequestPage() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light navblood">
          <a className="navbar-brand" href="#">
            <img src="../../../img/blood 1.png" alt="" />
            <h6>GET BLOOD</h6>
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
                <button type="button" className="navbutton1">
                  Register
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <h1>Find A Blood Bank or Drive Close To You</h1>
        <div class="container">
          <div class="row">
            <div class="col"><input></input></div>
            <div class="col">Column</div>
            <div class="col">Column</div>
          </div>
        </div>
      </div>
    );
}

export default RequestPage
