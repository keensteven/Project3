import React, { Component } from 'react';
import Hero from "../components/Hero";
import Photowrapper from "../components/Photowrapper";
import ProductCard from "../components/ProductCard";
import products from "../productlist.json";  //since this is my list we need to change this from looping through the json file to looping through the items in the db

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

  render() {
    return (
      <div>
        <Hero backgroundImage="/img/dandelion26.jpg">
          <h1>Your List</h1>
          <h2>Buy Something Special</h2>
        </Hero>
        <Photowrapper style={{ marginTop: 50 }}>
          {products.map((product) => {
              return(<ProductCard key={product.id} product={product} />)
            })}
        </Photowrapper>
      </div>
    );
  }

}

export default Yourlist;
