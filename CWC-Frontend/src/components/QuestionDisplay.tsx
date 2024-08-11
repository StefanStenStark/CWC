import React from "react";
import { Question } from "./QuestionFetcher";

interface QuestionDisplayProps {
  question: Question;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  return (
    <div>
      <p>{question.questionText}</p>
      <div>
        <code>{question.answerCorrect}</code>
      </div>
      <div>
        <code>{question.answerWrongOne}</code>
      </div>
      <div>
        <code>{question.answerWrongTwo}</code>
      </div>
    </div>
  );
};

export default QuestionDisplay;
