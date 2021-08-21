import React from 'react'
import { Link } from 'react-router-dom'

export default function Success() {
  return (
    <div>
       <div className="logo3">
            <img src="../../../img/vaccine.svg" alt="" />


          </div>
          <h1>Request Successful!</h1>
          <p>Your request was successful </p>
          {/* <Link to='/'></Link> */}
          <button class="btn4">Go Back Home</button>
    </div>
  )
}
