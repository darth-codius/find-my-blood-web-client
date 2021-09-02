import React from "react";
import "./SentRequest.css"

function SentRequests() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navblood">
        <a className="navbar-brand" href="..">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <button type="button" className="navbutton1">
                Make a Request
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sentrequestdiv">
        <div class="card mb-3 sentrequestcard" style={{ maxWidth: "540px" }}>
          <div class="row g-0">
            <div class="col-md-4">
              <img
                src="../../../img/Dashboard icon.svg"
                class="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Okwe General Hospital, Asaba</h5>
                <p class="card-text">
                  144 Mariam Babangida road, Asaba, Delta State.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reqbuttondiv">
          <h4>Incoming Requests</h4>

          <table class="table table-sm">
            <thead>
              <tr class="bg-danger text-center">
                <th scope="col"></th>
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-danger requestrow">
                <th scope="row"></th>
                <td>Federal Medical Centre(FMC)Asaba</td>
                <td>O+</td>
                <td>15 Units</td>
                <td>
                  <img src="../../../img/Group 716.svg" alt=".." />
                </td>
              </tr>
              <tr class="table-danger requestrow">
                <th scope="row"></th>
                <td>Federal Medical Centre(FMC)Asaba</td>
                <td>O+</td>
                <td>15 Units</td>
                <td>
                  <img src="../../../img/Group 717.svg" alt=".." />
                </td>
              </tr>
              <tr class="table-danger requestrow">
                <th scope="row"></th>
                <td>Federal Medical Centre(FMC)Asaba</td>
                <td>O+</td>
                <td>15 Units</td>
                <td>
                  <img src="../../../img/Group 716.svg" alt=".." />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SentRequests;
