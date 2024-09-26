import React from "react";

const BackCard = (props) => {
  return (
    <div className="card-back" onClick={props.onClick}>
      <h3>Press the next arrow to start the flashcards</h3>
    </div>
  )
}

export default BackCard;