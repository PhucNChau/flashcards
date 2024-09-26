import React, { useState } from "react";
import './Card.css'
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Card = (props) => {
  const [isFlip, setIsFlip] = useState(false);

  const flipCard = () => {
    setIsFlip(!isFlip);
    console.log(isFlip);
  }

  return (
    <div className="card">
      <div className={`card-inner ${isFlip && 'flipped'}`}>
        {isFlip ? (
          <BackCard onClick={flipCard} />
        ) : (
          <FrontCard onClick={flipCard} />
        )}
      </div>
    </div>
  )
}

export default Card;