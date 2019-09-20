import React, { Component } from 'react';
import Hero from "../components/Hero";
// import Wrapper from "../components/Wrapper";
import Photowrapper from "../components/Photowrapper";
import ProductCard from "../components/ProductCard";
import products from "../productlist.json";
import { Row } from 'reactstrap';
import API from "../utils/API";



class Products extends Component {

  componentDidMount(){
    console.log(products);
  }
  handleAddToList = e => {
    e.preventDefault();

    console.log(e.target)

    const product = {
      productId: e.target.getAttribute("data-id"),
      productName: e.target.getAttribute("data-name"),
      productImage: e.target.getAttribute("data-image"),
      userId: sessionStorage.getItem("userId")
    }
  
    console.log(product)
    
  }

  render(){
    return (
      <div>
        <Hero backgroundImage="/img/dandelion28.jpg">
          <h1>Wish List</h1>
          <h2>Buy Something Special</h2>
        </Hero>
        <Photowrapper style={{ marginTop: 50 }}>
            {products.map((product) => {
              return(<ProductCard key={product.id} handleAddToList={this.handleAddToList} product={product} />)
            })        
            }
        </Photowrapper>
      </div>
    );
  }
 
  
}

export default Products;
