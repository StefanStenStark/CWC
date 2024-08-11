import { ChangeEvent, useState } from "react";
import { getQuestions } from "./QuestionFetcher";
import "./CodeMatcher.css";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const questions = getQuestions();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Submit");
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [animateCorrect, setAnimateCorrect] = useState(false);
  const [animateIncorrect, setAnimateIncorrect] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedRightCodeSnippet = normalizeWhitespace(
      currentQuestion.rightCodeSnippet
    );

    const isCorrect = cleanedInputValue === cleanedRightCodeSnippet;
    if (nextQuestionButton) {
      handleNextQuestion();
      setButtonText("Submit");
      setNextQuestionButton(false);
      setShowExplanation(false);
      setAnimateCorrect(false);
      setAnimateIncorrect(false);
    }
    if (isCorrect && !nextQuestionButton) {
      setScore(score + 1);
      setButtonText("Next Question");
      setNextQuestionButton(true);
      setAnimateCorrect(true);
      setAnimateIncorrect(false);
      setTimeout(() => {
        setShowExplanation(true);
      }, 2000);
    } else if (!isCorrect && !nextQuestionButton) {
      setAnimateIncorrect(true);
      setAnimateCorrect(false);
      setTimeout(() => {
        setAnimateIncorrect(false);
      }, 2000);
    }
  };

  const handleNextQuestion = (): void => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : 0
    );
    setInputValue("");
    setAnimateCorrect(false);
    setAnimateIncorrect(false);
  };

  return (
    <div className="center-holder">
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
        className={
          animateCorrect
            ? "correct-answer-button"
            : animateIncorrect
            ? "incorrect-answer-button"
            : ""
        }
      >
        {buttonText}
      </button>
      <p
        className={
          animateCorrect
            ? "correct-answer"
            : animateIncorrect
            ? "incorrect-answer"
            : ""
        }
      >
        Score: {score}
      </p>
      <p>{showExplanation ? currentQuestion.explanation : ""}</p>
    </div>
  );
}

export default CodeMatcher;
