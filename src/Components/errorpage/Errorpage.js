import React from 'react'
import './Errorpage.css'
export default function Errorpage() {
  const goHome = e =>{window.location.href = '/'}
  return (
    <div className="col-container">

      <div className="logo3">
        <img src="../../../img/error.svg" alt="" />
      </div>
      <h1>Oops! this page is unknown or does not exist </h1>
      <p>Sorry about that, but the page you are looking for is'nt available.</p>
      {/* <Link to='/'></Link> */}
      <button className="error-btn" onClick={goHome}>Go Back Home</button>
    </div>
  )
}

