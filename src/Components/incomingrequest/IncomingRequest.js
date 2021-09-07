import React, { useEffect, useState } from "react";
import axios from "axios";
import RequestRow from "../request_row/RequestRow";
import "./IncomingRequest.css";

function IncomingRequests() {
  const [requests, setRequests] = useState([]);

  const token = JSON.parse(localStorage.getItem("token"));
  const user = JSON.parse(localStorage.getItem('user'))

  const headers = {
    "Content-Type": "application/json",
    Authorization: `${token}`,
  };

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.post(
          "https://find-my-blood.herokuapp.com/hospital/request/all",
          { hospital: user.name },
          { headers }
        );
        console.log(response.data.data);
        setRequests(
          [...response.data.data.recievedRequest],
        );
      } catch (error) {}
    }

    getData();
  }, []);



  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navblood">
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

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button type="button" className="navbutton1">
                Make a Request
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className="sentrequestdiv">
        <div
          className="card mb-3 sentrequestcard"
          style={{ maxWidth: "540px" }}
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src="../../../img/Dashboard icon.svg"
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Okwe General Hospital, Asaba</h5>
                <p className="card-text">
                  144 Mariam Babangida road, Asaba, Delta State.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="reqbuttondiv">
          <h4>Incoming Requests</h4>

          <table className="table table-sm">
            <thead>
              <tr className="bg-danger text-center">
                <th scope="col"></th>
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>
            {
                requests.map((request, index) => {
                  return <RequestRow request={request} key={index}/>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default IncomingRequests;
