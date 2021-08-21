import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

export default function Success() {
  return (
    <div>
 
          <div className="logo4">
        <img src="../../../img/vaccine.svg" alt="" />

          </div>
          <h1>Request Successful!</h1>
          <p>Your request was successful </p>
          <Link to='/'></Link>
          <button class="btn3">Go Back Home</button>
            {/* <img src="../../../img/error.svg" alt="" />
            </div>
            <h1>Oops! this page is unknown or does not exist </h1>
          <p>Sorry about that, but the page you are looking for is'nt available</p>
          {/* <Link to='/'></Link> */}
       
        </div>
    </div>
  )
}

