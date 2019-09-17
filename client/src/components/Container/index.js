import React from "react";
import "./style.css";


function Container(props) {
  return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
}

// function Container(props) {
//   return (
//     <div className="container">
//     </div>
//   );
// }

// function Container(props) {
//   return <div className={`container${props.fluid ? "-fluid" : ""}`} {...props} />;
// }
export default Container;
