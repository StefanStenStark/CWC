import React from "react";
import "../styles/CodeMatcher.css";

interface AnimatedButtonProps {
  onClick: () => void;
  stateOfAnitmation: string;
  buttonText: string;
  score: number;
}

const ScoreAndButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  stateOfAnitmation,
  buttonText,
  score,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={
          stateOfAnitmation === "handleCorrectAnswer"
            ? "correct-answer-button"
            : stateOfAnitmation === "handleIncorrectAnswer"
            ? "incorrect-answer-button"
            : ""
        }
      >
        {buttonText}
      </button>

      <p>Score:</p>
      <p>
        <span
          className={
            stateOfAnitmation == "handleCorrectAnswer"
              ? "correct-answer"
              : stateOfAnitmation == "handleIncorrectAnswer"
              ? "incorrect-answer"
              : ""
          }
        >
          {score}
        </span>
      </p>
    </>
  );
};

export default ScoreAndButton;
