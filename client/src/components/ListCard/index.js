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
          <button 
            type="button" 
            className="btn btn-secondary" 
            data-id={props.product.product_Id}
            data-name={props.product.product_Name}
            data-image={props.product.product_Image}
            // onClick={props.handleAddToList}>Purchase</button>
            >Purchase</button>

        </div>
      </div>

  );
}

export default ListCard;
