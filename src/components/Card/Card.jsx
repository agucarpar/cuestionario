import React, { useState } from "react";
import Questions from "../../utils/const/questions";
import "./card.css"

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scored, setScored] = useState(0);

  const chekingIfCorrect = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);

    if (isCorrect) {
      setScored(scored + 1);
    }
  };
  return (
    <div className="card__wrap">

      <p className="card__question">{Questions[currentQuestion].questionText}</p>

      <div className="card__answers">
      {Questions[currentQuestion].answersOptions.map((answer) => (
        <button className='button_answer' onClick={() => chekingIfCorrect(answer.isCorrect)}>
          {answer.answerText}
        </button>
      ))}
      </div>
    </div>
  );
};

export default Card;
