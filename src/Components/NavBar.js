import React from "react";

function NavBar() {
  return (
    
      <nav class="navbar navbar-expand-lg navbar-light bg-light navblood">
        <a className="navbar-brand" href="..">
          <img src="../../../img/Vector.svg" alt="" className="navimg" />
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
    
  );
}

export default NavBar;
