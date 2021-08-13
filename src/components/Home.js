import React from 'react'

export default function Home() {
    return (
        <div>
            <nav className="homenav">
                <div className="nav1">
                    <h6>GET BLOOD</h6>
                </div>
                <div className="buttonnav">
                    
                    <button type="button" class="btn btn-outline-danger">Login</button>
                    <button type="button" class="btn btn-outline-danger">Register</button>

                </div>
            </nav>
            
            <div class="card mb-3" className="card1">
              <div class="row g-0">
                <div class="col-md-6">
                  <div class="card-body" className="card2">
                    <h1 class="card-title" className="cardtittle">Get blood, Save Lives</h1>
                    <p class="card-text" className="cardtext">We are linked by blood, and blood is memory without language</p>
                    <button type="button" className="button3">Get Started</button>
                  </div>
                </div>
                <div class="col-md-6">
                   <img src="../../../img/Laboratory-pana.svg" class="img-fluid rounded-start" alt="..."/>
                </div>
              </div>
            </div>
            
            <div>
                <div>
                    <img src="..." alt="..."/>
                </div>
                <div>
                    <h1>Download our mobile app</h1>
                    <hr/>
                    <p>Our dedicated hospital engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely</p>
                    <button type="button" className="button4">Download App</button>
                </div>
            </div>
        </div>
    )
}
