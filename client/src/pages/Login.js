import React, { Component } from 'react';
import Logincard from "../components/Logincard";
import API from "../utils/API";

class Login extends Component {
  constructor(props){
    super(props)
         
  }
    state = {
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
     
      API.authenticateUser({
        email: this.state.email,
        password: this.state.password
      }).then(res => {
       
        let user = res.data;
     
        delete user.password;
        
       this.props.loginUser(user)
       sessionStorage.setItem("isAuthenticated", true);
       sessionStorage.setItem("userId", user.id);
        window.location.replace("/yourlist");
      })
        .catch(err => {
          console.log(err)
          
        });
    }
  };

  render() {
    return (
      <div className="container">
        <Logincard handleOnUpdate={this.handleOnUpdate} handleFormSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}

export default Login;
