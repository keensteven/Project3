import React, { Component } from 'react';
import Hero from "../components/Hero";
import Photowrapper from "../components/Photowrapper";
import ProductCard from "../components/ProductCard";
import products from "../productlist.json";
import API from "../utils/API";



class Products extends Component {

  componentDidMount(){
    console.log(products);
  }
  handleAddToList = e => {
    e.preventDefault();

    console.log(e.target)

    const product = {
      product_Id: e.target.getAttribute("data-id"),
      product_Name: e.target.getAttribute("data-name"),
      product_Image: e.target.getAttribute("data-image"),
      user_Id: sessionStorage.getItem("userId")
    }
  
    console.log(product)
    API.createRegistry(product).then(res => console.log(res) ).catch(err => console.log(err))
    
  }

  

  render(){
    return (
      <div>
        <Hero backgroundImage="/img/dandelion28.jpg">
          <h1>Wish List</h1>
          <h2>Buy Something Special</h2>
        </Hero>
        <Photowrapper>
            {products.map((product) => {
              return(<ProductCard key={product.id} 
                handleAddToList={this.handleAddToList} 
                product={product} />)
            })        
            }
        </Photowrapper>
      </div>
    );
  }
 
  
}

export default Products;
