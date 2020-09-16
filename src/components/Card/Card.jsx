import React, { useState } from "react";
import Questions from "../../utils/const/questions";
import FinalMessage from "../FinalMessage/FinalMessage";
import "./card.css";

const Card = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const questionsLength = Questions.length;

  const chekingIfCorrect = (isCorrect) => {
   if(isCorrect) {
     setScore(score+1)
   }
   const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questionsLength) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
  };

  return (
    <>
   { showScore === false ?  (<div className="card__wrap">
        <p className="card__question">
          {Questions[currentQuestion].questionText}
        </p>

        <div className="card__answers">
          {Questions[currentQuestion].answersOptions.map((answer) => (
            <button
              key={answer.answerText}
              onClick={() => chekingIfCorrect(answer.isCorrect)}
            >
              {answer.answerText}
            </button>
          ))}
        </div>
      </div>)
      :
      (<FinalMessage 
        score={score}
        questionsLength={questionsLength}
      />)
      }
    </>
  );
};

export default Card;
