import React from "react";
import "./style.css";

function HomeHero(props) {
  return (
    <div className="homehero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
      {props.children}
    </div>
  );
}

export default HomeHero;
