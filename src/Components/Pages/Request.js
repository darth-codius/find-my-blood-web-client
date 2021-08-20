import React from "react";

export default function Request() {
  return (
      <>
     <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
     <a class="navbar-brand" href="#">Navbar</a>
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
     </button>
     
     
      
      <form class="d-flex">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      
      </div>
      </nav>
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

      
     </>
  );
}
