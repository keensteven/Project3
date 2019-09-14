import React, { Component } from "react";
import Enrollcard from "../components/Enrollcard"
import API from "../utils/API";

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
      }).then(res => window.location.replace("/login"))
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <div className="container">
        <Enrollcard handleOnUpdate={this.handleOnUpdate} handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default Enroll;
