import React from "react";

function RequestPage() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light navblood">
        <a className="navbar-brand" href="#">
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
              <button type="button" className="navbutton1">
                Register
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <h3>Find A Blood Bank or Drive Close To You</h3>
      <div class="container">
        <div class="row">
          <div class="col">
            <input></input>
          </div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                Postal Code
              </label>
            </div>
          </div>
          <div class="col">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="exampleRadios"
                id="exampleRadios1"
                value="option1"
                checked
              />
              <label class="form-check-label" for="exampleRadios1">
                City Name
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">
          <div class="col">
            <div class="form-group col-md-6">
              <label for="inputState">Blood Group Request:</label>
              <select id="inputState" class="form-control">
                <option></option>
                <option selected>Blood group...</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-md-6">
              <label for="inputState">Show locations within:</label>
              <select id="inputState" class="form-control">
                <option></option>
                <option selected>Search Locations...</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-md-6">
              <label for="inputState">Units Required:</label>
              <select id="inputState" class="form-control">
                <option></option>
                <option selected>Units...</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div>
        <button className="requstbutton">Find Blood</button>
      </div>

      <table class="table">
        <caption>List of users</caption>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default RequestPage;
