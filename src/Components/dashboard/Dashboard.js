import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import RequestRow from "../request_row/RequestRow";
import "./Dashboard.css";

export default function Request() {
  const [request, setRequest] = useState({
    status: "",
    sentRequest: [],
    recievedRequest: []
  });

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
        setRequest({
          status: response.data.status,
          sentRequest: [...response.data.sentRequest],
          recievedRequest: [...response.data.recievedRequest]
        })

      } catch (error) {

      }
    };

    getData()
  }, [])
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
              <Link to="/profile">
                <img src="../../../img/Profile.svg" alt="" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="container4">
        <div className="row">
          <div className="col-md-8">
            <h1 className="save">Get Blood, Save Lives</h1>
            <p className="life">
              There's blood beneath every layer of skin, <br></br>the blood is
              the life!
            </p>
            <Link to="/requestpage">
              <button className="make">Make a Request</button>
            </Link>
          </div>
          <div className="col-md-3 imgdashb">
            <img src="../../../img/bloodgroup(1).svg" alt="" />
          </div>
        </div>
        <div className="table">
          <h2>Sent Request</h2>
          <table className="table caption-top">
            <thead>
              <tr className="bg-danger">
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                request['sentRequest'].map((request, index) => {
                  return (
                    <RequestRow request={request} key={index} />
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="requestpageP">
          <Link to="/sentrequest">
            <p>See More <img src="../../../img\Arrow 3.svg" alt="" /></p>
          </Link>
        </div>
        <div>
          <h3>Incoming Request</h3>
          <table className="table caption-top">
            <thead>
              <tr className="bg-danger">
                <th scope="col">Blood Bank</th>
                <th scope="col">Blood group</th>
                <th scope="col">Units Requested</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {
                request['recievedRequest'].map((request, index) => {
                  return (
                    <RequestRow request={request} key={index} />
                  )
                })
              }
            </tbody>
          </table>
        </div>
        <div className="requestpageP">
          <Link to="/incomingrequest">
            <p>See More <img src="../../../img\Arrow 3.svg" alt="" /></p>
          </Link>
        </div>
      </div>
    </div>
  );
}
