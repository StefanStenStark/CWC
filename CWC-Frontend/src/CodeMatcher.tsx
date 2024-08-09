import { ChangeEvent, useState } from "react";
import { getQuestions } from "./QuestionFetcher";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const questions = getQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isMatch, setIsMatch] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedRightCodeSnippet = normalizeWhitespace(
      currentQuestion.rightCodeSnippet
    );
    const isCorrect = cleanedInputValue === cleanedRightCodeSnippet;
    setIsMatch(isCorrect);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
    setInputValue("");
    setIsMatch(null);
  };

  return (
    <div>
      <p>{currentQuestion.question}</p>
      <div>
        <code>{currentQuestion.rightCodeSnippet}</code>
      </div>
      <div>
        <code>{currentQuestion.wrongCodeSnippetOne}</code>
      </div>
      <div>
        <code>{currentQuestion.wrongCodeSnippetTwo}</code>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type the code here"
      />
      <button
        onClick={handleCheck}
        style={{ display: "block", margin: "10px auto" }}
      >
        Check Code
      </button>

      <button
        onClick={handleNextQuestion}
        style={{ display: "block", margin: "10px auto" }}
      >
        Next Question
      </button>

      <p>
        {isMatch === null
          ? ""
          : isMatch
          ? "Code matches!"
          : "Code does not match."}
      </p>
      <p>
        Score: {score} / {currentQuestionIndex + 1}
      </p>
    </div>
  );
}

export default CodeMatcher;
