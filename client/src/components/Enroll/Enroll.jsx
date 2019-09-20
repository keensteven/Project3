import React, { Component } from "react";
import API from "../../utils/API"
import "./styleEnroll.css"


class Enroll extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  handleOnUpdate = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    
    if (this.state.email && this.state.password) {
      API.saveUser({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        password: this.state.password
      }).then(res => console.log("Tried to insert"))
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div className="form">
        <ul>
          <li>
            <input
              onChange={this.handleOnUpdate}
              name="firstName"
              placeholder="First Name"
              type="text"
            ></input>
          </li>
          <li>
            <input
              onChange={this.handleOnUpdate}
              name="lastName"
              placeholder="Last Name"
              type="text"
            ></input>
          </li>
          <li>
            <input
              onChange={this.handleOnUpdate}
              name="email"
              placeholder="Email"
              type="text"
            ></input>
          </li>
          <li><input
          onChange={this.handleOnUpdate}
          name="password"
          placeholder="Password"
          type="password"
        ></input></li>
          <li><button type="submit" onClick={this.handleFormSubmit}>Submit</button></li>
        </ul>

        
      </div>

    );
  }
}

export default Enroll;
