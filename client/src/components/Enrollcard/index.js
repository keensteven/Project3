import React from "react";
import "./style.css";

function EnrollmentCard({ handleOnUpdate, handleFormSubmit }) {
  return (
    <div className="mt-5">

      <div className="border border-secondary">
        <h5 className="card-header">Enroll</h5>
        <div className="card-body">
          <form>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" className="form-control" id="firstName" onChange={handleOnUpdate} />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" className="form-control" id="lastName" onChange={handleOnUpdate} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" className="form-control" id="email" onChange={handleOnUpdate} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" className="form-control" id="password" onChange={handleOnUpdate} />
              <button className="btn btn-primary mt-4" onClick={handleFormSubmit}>Submit</button>
            </div>
            <div className="g-signin2" data-onsuccess="onSignIn"></div>   
          </form>
        </div>
      </div>




    </div>

  );
}

export default EnrollmentCard;