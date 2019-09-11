import React from "react";
import "./style.css";

function Logincard({handleOnUpdate,handleFormSubmit}) {
  return (
    <div className="center">

<div className="card">
  <h5 className="card-header">Log In</h5>
  <div className="card-body">
  <form>
  <div className="form-group pt-2">
    <label htmlFor="email">User Name</label>
    <input type="email" name="email" className="form-control" id="email" onChange={handleOnUpdate} />
  </div>
  <div className="form-group">    
    <label htmlFor="password">Password</label>
    <input type="password"  name="password" className="form-control mb-2" id="password" onChange={handleOnUpdate} />   
    <button className="btn btn-primary mt-4" onClick={handleFormSubmit}>Start Wishing</button>

  </div>
  </form>
  </div>
</div>

    


  </div>

  );
}

export default Logincard;