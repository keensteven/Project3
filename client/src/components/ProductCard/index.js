import React from "react";
import "./style.css";
// import { Row, Col } from "reactstrap";

function ProductCard(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.product.name} src={props.product.image} />
          
        </div>
        <div className="content">
          <p>
              <strong>Name:</strong> {props.product.name}
            
          </p>
              {props.product.price} 
          <br />
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-id={props.product.id}
            data-name={props.product.name}
            data-image={props.product.image}
            onClick={props.handleAddToList}>Add to Wish List</button>
        </div>
      </div>

  );
}

export default ProductCard;
