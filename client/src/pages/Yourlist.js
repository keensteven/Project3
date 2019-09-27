import React, { Component } from 'react';
import Hero from "../components/Hero";
import Photowrapper from "../components/Photowrapper";
import ListCard from "../components/ListCard";
import products from "../productlist.json";  //since this is my list we need to change this from looping through the json file to looping through the items in the db
import API from '../utils/API';

class Yourlist extends Component {  
  // constructor(props){
  //   super(props)
  // }
  // componentDidMount = () => {
  //   if(this.props.isAuthenticated === true){
  //     alert("is authenticated")
  //   }else{
  //     alert("Not authenticated")
  //   } 
  // }

  state= {
 
    result: []
  }
  
  componentDidMount(){
  this.loadUserList();
  }
loadUserList = () =>{
  const userId = sessionStorage.getItem("userId")
  
  API.Finduserlist(userId).then(res => this.setState({result : res.data}))
  .catch(err => console.log(err));
}

  render() {
    return (
      <div>
        <Hero backgroundImage="/img/dandelion26.jpg">
          <h1>Your List</h1>
          <h2>Buy Something Special</h2>
        </Hero>
        <Photowrapper style={{ marginTop: 50 }}>
          {this.state.result.map((product) => {
              return(<ListCard key={product.id} product={product} />)
            })}
        </Photowrapper>
      </div>
    );
  }

}

export default Yourlist;
