import React from "react";
import './Card.css'

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="card-front">
          <p>Start!</p>
        </div>
        <div className="card-back">
          <p>Press the next arrow to start the flashcards</p>
        </div>
      </div>
    </div>
  )
}

export default Card;