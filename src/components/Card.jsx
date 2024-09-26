import React from "react";
import './Card.css'
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Card = (props) => {
  var isFlip = false;

  return (
    <div className="card">
      <div className="card-inner">
        {isFlip ? (
          <BackCard />
        ) : (
          <FrontCard />
        )}
      </div>
    </div>
  )
}

export default Card;