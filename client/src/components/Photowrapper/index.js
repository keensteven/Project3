import React from "react";
import "./style.css";

function Photowrapper(props) {
  return <div className="Photowrapper">{props.children}</div>;
}

export default Photowrapper;