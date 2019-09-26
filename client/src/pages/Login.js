import React, { Component } from 'react';
import Logincard from "../components/Logincard";
import API from "../utils/API";
import Container from "../components/Container";
import { Alert } from 'reactstrap';



class Login extends Component {
  constructor(props){
    super(props)
         
    this.state = {
    email: "",
    password: "",
    alertVisibility: false
  };  
  this.onDismiss = this.onDismiss.bind(this);
  }
  onDismiss() {
    this.setState({ alertVisibility: false });
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
          console.log(err);
          //alert("This email address and password combination does not match a user in our records. Please review and try again.");          
          this.setState({ alertVisibility: true });  
        });
    }
  };

  render() {
    return (
      <div>
      <Alert color="secondary" isOpen={this.state.alertVisibility} toggle={this.onDismiss} fade={false}>
      This email address and password combination does not match a user in our records. Please review and try again.
      </Alert>
      <Container>
        <Logincard handleOnUpdate={this.handleOnUpdate} handleFormSubmit={this.handleFormSubmit} />
      </Container>

      </div>
    );
  }
}

export default Login;
