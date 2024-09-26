import React from "react";

const FrontCard = (props) => {
  return (
    <div className="card-front" onClick={props.onClick}>
      <h3>Start!</h3>
    </div>
  )
}

export default FrontCard;