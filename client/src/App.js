import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Yourlist from "./pages/Yourlist";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import './App.css';
import Enroll from './pages/Enroll';
import Home from './pages/Home'


// const PrivateRoute = ({component: Component, ...rest}) => (
//   <Route {...rest} render={()=> (

//   )} />
// )

class App extends Component {
  state = {
    isAuthenticated: false,
    user: {}
  };
  login = (user) => {
    if (user.email && user.id) {
      this.setState({ user, isAuthenticated: true })
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Products} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/yourlist" component={Yourlist} />
            <Route exact path='/login' component={() => <Login loginUser={this.login} />} />
            <Route exact path='/enroll' component={Enroll} />
            <Route exact path='/home' component={Home} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );

  }

}

export default App;
