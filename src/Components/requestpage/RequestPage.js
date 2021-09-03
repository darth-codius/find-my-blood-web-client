import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./RequestPage.css"


function RequestPage() {

  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [banks, setBanks] = useState([])

  const token = JSON.parse(localStorage.getItem('token'))
  // eslint-disable-next-line
  const user = JSON.parse(localStorage.getItem('user'))

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `${token}`
  }



  const handleFindblood = async () => {
    try {
      let res = await axios.post(
        "https://find-my-blood.herokuapp.com/hospital/blood/search",
        {
          bloodGroup,
        }, {
        headers: headers
      }
      );
      console.log(res.data);
      setBanks(() => [...res.data.data])

    } catch (error) {
      console.error(error);
    }
  };

  const handleRequest = async (e) => {

  };


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

      <h3 className="requesttext">Find A Blood Bank or Drive Close To You</h3>
      

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="form-group col-md-10">
              <label htmlFor="inputState">Blood Group Request:</label>
              <select id="inputState" className="form-control" value={bloodGroup}
                onChange={(e) => setBloodGroup(e.target.value)}>
                <option defaultValue>Blood group...</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>O+</option>
                <option>O-</option>
                <option>AB+</option>
                <option>AB-</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-group col-md-10">
              <label htmlFor="inputState">Units Required:</label>
              <input id="inputState" className="form-control" placeholder="units" value={units}
                onChange={(e) => setUnits(e.target.value)}></input>

            </div>
          </div>
        </div>
      </div>

      <div className="reqbuttondiv">
        <button className="requstbutton" type="submit" onClick={handleFindblood}>Find Blood</button>
      </div>

      <div className="requesttable">
        <hr />
        <h4>Available Blood Banks</h4>

        <table className="table table-sm">
          <thead>
            <tr className="bg-danger text-center">
              <th scope="col"></th>
              <th scope="col">Blood Bank</th>
              <th scope="col">Location</th>
              <th scope="col">Capacity</th>
              <th scope="col">Blood Group</th>
            </tr>
          </thead>
          <tbody>
            {
              banks.map((bank, index) => {
                return (
                  <tr className="table-danger requestrow" key={index} onClick={handleRequest}>
                    <th scope="row"></th>
                    <td>{bank.hospital.name}</td>
                    <td>{bank.hospital.address} {bank.hospital.state}</td>
                    <td>{bank.units} Units</td>
                    <td>{bank.bloodGroup}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default RequestPage;
