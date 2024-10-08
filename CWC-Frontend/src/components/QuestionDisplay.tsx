import React, { useMemo } from "react";
import { Question } from "./QuestionFetcher";

interface QuestionDisplayProps {
  question: Question;
  inputValue: string;
  setInputValue: (value: string) => void;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({
  question,
  inputValue,
  setInputValue,
}) => {
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
            borderBottom: "1px solid gray",
            padding: "5px",
            margin: "2px",
            borderRadius: "5px",
          }}
        >
          <code>{answer.text}</code>
        </div>
      ))}
      <textarea
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder="Type the code here"
      />
    </div>
  );
};

export default QuestionDisplay;
