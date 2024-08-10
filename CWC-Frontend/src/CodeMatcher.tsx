import { ChangeEvent, useState } from "react";
import { getQuestions } from "./QuestionFetcher";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const questions = getQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("submit");
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedRightCodeSnippet = normalizeWhitespace(
      currentQuestion.rightCodeSnippet
    );
    setShowExplanation(true);
    const isCorrect = cleanedInputValue === cleanedRightCodeSnippet;
    if (nextQuestionButton) {
      handleNextQuestion();
      setButtonText("submit");
      setNextQuestionButton(false);
      setShowExplanation(false);
    }
    if (isCorrect && !nextQuestionButton) {
      setScore(score + 1);
      setButtonText("Next question");
      setNextQuestionButton(true);
    }
  };

  const handleNextQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
    setInputValue("");
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
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder="Type the code here"
      />
      <button
        onClick={handleCheck}
        style={{ display: "block", margin: "10px auto" }}
      >
        {buttonText}
      </button>
      <p>Score: {score}</p>
      <p>{showExplanation ? currentQuestion.explanation : ""}</p>
    </div>
  );
}

export default CodeMatcher;
