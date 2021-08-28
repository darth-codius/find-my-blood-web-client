import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Request() {
  const [request, setRequest] = useState({});

  const token = JSON.parse(localStorage.getItem('token'))
  const user = JSON.parse(localStorage.getItem('user'))

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }
  useEffect(() => {

    async function getData() {
      try {
        const response = await axios.post("https://find-my-blood.herokuapp.com/hospital/request/all",
          { hospital: user.name }, { headers })
        console.log(response);
        // setRequest(data)

      } catch (error) {

      }
    };

    getData()
  }, [])
  return (
    <div className="container4">
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className="save">Get Blood, Save Lives</h1>
            <p className="life">
              There's blood beneath every layer of skin, <br></br>the blood is
              the life!
            </p>
            <Link to="/requestpage">
              <button className="make">Make a Request</button>
            </Link>
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
              { }//todo
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
    </div>
  );
}
