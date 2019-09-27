import React from "react";
import "./style.css";

function ListCard(props) {
  return (
      <div className="card">
        <div className="img-container">
          <img alt={props.product.product_Name} src={props.product.product_Image} />
          
        </div>
        <div className="content">
          <p>
              <strong>Name:</strong> {props.product.product_Name}
            
          </p>
              {props.product.price} 
          <br />
          <a className="btn btn-primary" href="https://www.amazon.com" target="_blank" role="button">Purchase</a>
          
        </div>
      </div>

  );
}

export default ListCard;
