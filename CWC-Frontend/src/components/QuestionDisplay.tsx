import React, { useMemo } from "react";
import { Question } from "./QuestionFetcher";

interface QuestionDisplayProps {
  question: Question;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ question }) => {
  const shuffledAnswers = useMemo(() => {
    const answers = [
      { text: question.answerCorrect, isCorrect: true },
      { text: question.answerWrongOne, isCorrect: false },
      { text: question.answerWrongTwo, isCorrect: false },
    ];

    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }

    return answers;
  }, [question]);

  return (
    <div>
      <p>{question.questionText}</p>
      <p>one of the three is correct, write it out</p>
      {shuffledAnswers.map((answer, index) => (
        <div
          key={index}
          style={{
            border: "1px solid gray",
            padding: "5px",
            margin: "2px",
            borderRadius: "5px",
          }}
        >
          <code>{answer.text}</code>
        </div>
      ))}
    </div>
  );
};

export default QuestionDisplay;
