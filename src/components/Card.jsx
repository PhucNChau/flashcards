import React, { useState } from "react";
import './Card.css'
import FrontCard from "./FrontCard";
import BackCard from "./BackCard";

const Card = (props) => {
  const [isFlip, setIsFlip] = useState(false);
  const [prevQuiz, setPrevQuiz] = useState(props.quizBundle);
  const [cardColor, setCardColor] = useState("rgba(255, 255, 255, 0.95)")

  const flipCard = () => {
    setIsFlip(!isFlip);
  };

  if (prevQuiz !== props.quizBundle) {
    setPrevQuiz(props.quizBundle);
    setIsFlip(false);
    switch (props.quizBundle?.difficulty) {
      case 'Easy':
        setCardColor('rgba(167, 234, 174, 0.65)');
        break;
      case 'Medium':
        setCardColor('rgba(230, 226, 111, 0.65)');
        break;
      case 'Hard':
        setCardColor('rgba(234, 145, 119, 0.65)');
        break;
      default:
        setCardColor('rgba(255, 255, 255, 0.65)');
    }
  }

  return (
    <div className="card">
      <div className={`card-inner ${isFlip ? 'flipped' : ''}`} style={{backgroundColor: `${cardColor}`}}>
        {isFlip ? (
          <BackCard onClick={flipCard} answer={props.quizBundle?.answer} />
        ) : (
          <FrontCard onClick={flipCard} question={props.quizBundle?.question} />
        )}
      </div>
    </div>
  )
}

export default Card;