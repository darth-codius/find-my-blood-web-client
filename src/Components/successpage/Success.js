import React from "react";
import "./Success.css";

export default function Success() {
  const goHome = e =>{window.location.href = '/dashboard'}
  return (
    <div className="col-container">
      <div className="logo4">
        <img src="../../../img/vaccine.svg" alt="" />
      </div>
      <h1 className="errortext">Request Successful!</h1>
      <p>Your request was successful </p>
      <button className="btn3" onClick={goHome}>Go Back Home</button>
    </div>
  );
}
