import React from "react";
import "./style.css";

function EnrollmentCard({ handleOnUpdate, handleFormSubmit }) {
  return (
    <div className="center">

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
              <div className="g-signin2" data-onsuccess="onSignIn"></div>        
            
            </div>
          </form>
        </div>
      </div>
    </div>

  );

  // function onSignIn(googleUser) {
  //   var profile = googleUser.getBasicProfile();
  //   console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  //   console.log('Name: ' + profile.getName());
  //   console.log('Image URL: ' + profile.getImageUrl());
  //   console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  // }

}

export default EnrollmentCard;