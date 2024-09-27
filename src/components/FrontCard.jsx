import React from "react";

const FrontCard = (props) => {
  return (
    <div className="card-front" onClick={props.onClick}>
      <h3>{props.question ?? "Start!"}</h3>
    </div>
  )
}

export default FrontCard;