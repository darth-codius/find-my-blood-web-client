import React from 'react'

function Footer() {
    return (
      <div>
        <div className="footer">
          <footer class="row row-cols-5 py-5 my-5 border-top">
            <div class="col">
              <h5>GET BLOOD</h5>
              <p>
                Get blood provides progressive ways to locate blood easily,
                accessible on mobile and online for everyone
              </p>
              <p class="text-white">©Find mY blood.All rights reserved</p>
            </div>

            <div class="col"></div>

            <div class="col">
              <h5>Navigation</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Search
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Notification
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    My Account
                  </a>
                </li>
              </ul>
            </div>

            <div class="col">
              <h5>Foolow Us</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Instagram
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Twitter
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            <div class="col">
              <h5>Terms & Policies</h5>
              <ul class="nav flex-column">
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Privacy Policies
                  </a>
                </li>
                <li class="nav-item mb-2">
                  <a href="#" class="nav-link p-0 text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    );
}

export default Footer
