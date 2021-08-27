import React from "react";


function RequestPage() {
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
              <img src="../../../img/Profile.svg" alt="" />
            </li>
          </ul>
        </div>
      </nav>

      <h3 className="requesttext">Find A Blood Bank or Drive Close To You</h3>
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
            <div class="form-group col-md-10">
              <label for="inputState">Blood Group Request:</label>
              <select id="inputState" class="form-control">
                <option selected>Blood group...</option>
                <option>1</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-md-10">
              <label for="inputState">Show locations within:</label>
              <select id="inputState" class="form-control">
                <option selected>Search Locations...</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
          </div>
          <div class="col">
            <div class="form-group col-md-10">
              <label for="inputState">Units Required:</label>
              <select id="inputState" class="form-control">
                <option selected>Units...</option>
                <option>1</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="reqbuttondiv">
        <button className="requstbutton">Find Blood</button>
      </div>

      <div className="requesttable">
        <hr />
        <h4>Available Blood Banks</h4>

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
          <tbody>
            <tr class="table-danger requestrow">
              <th scope="row"></th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
            </tr>
            <tr class="table-danger requestrow">
              <th scope="row"></th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr class="table-danger requestrow">
              <th scope="row"></th>
              <td>Larry the Bird</td>
              <td>@twitter</td>
              <td>@twitter</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestPage;
