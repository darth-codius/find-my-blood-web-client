import React from "react";

export default function Request() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <h1 className="save">
              Get Blood, Save Lives
            </h1>
            <p className="life">
              There's blood beneath every layer of skin, <br></br>the blood is the life!
            </p>
            <button className="make">Make a Request</button>
          </div>
          <div className="col-md-6">
            <img src="../../../img/bloodgroup(1).svg" alt="" />
          </div>
        </div>
      </div>

      {/* <div className="getblood1">
        <img src="../../../img/blood1.png" alt="" />
        <button className="make">Make a Request</button>
      </div>
      <div className="section">
        <div>
          <h1>Get Blood, Save Lives</h1>
          <p>
            There's blood beneath every layer of skin, the blood is the life!
          </p>
          <button className="make1">Make a Request</button>
          <div>
            <img src="../../../img/bloodgroup(1).svg" alt="" />
          </div>
        </div>
      </div> */}
    </>
  );
}
