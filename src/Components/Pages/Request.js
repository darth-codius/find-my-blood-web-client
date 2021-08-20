import React from "react";

export default function Request() {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="../../../img/getblood.jpeg" alt="" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <form class="d-flex">
            <button class="btn btn-outline-success" type="submit">
              Make a Request
            </button>
          </form>
        </div>
      </nav>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className="save">Get Blood, Save Lives</h1>
            <p className="life">
              There's blood beneath every layer of skin, <br></br>the blood is
              the life!
            </p>
            <button className="make">Make a Request</button>
          </div>
          <div className="col-md-6">
            <img src="../../../img/bloodgroup(1).svg" alt="" />
          </div>
        </div>
        <div className="table">
          <h2>Sent Request</h2>
          <table class="table caption-top">
            <thead>
              <tr class="bg-danger">
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-danger">
                <th scope="row"></th>
                <td>-----------</td>
                <td>-----------</td>
                <td>-----------</td>
              </tr>
              <tr class="table-danger">
                <th scope="row"></th>
                <td>-----------</td>
                <td>-----------</td>
                <td>-----------</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h3>Incoming Request</h3>
          <table class="table caption-top">
            <thead>
              <tr class="bg-danger">
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr class="table-danger">
                <th scope="row"></th>
                <td>-----------</td>
                <td>-----------</td>
                <td>-----------</td>
              </tr>
              <tr class="table-danger">
                <th scope="row"></th>
                <td>-----------</td>
                <td>-----------</td>
                <td>-----------</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
