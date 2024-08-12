import { ChangeEvent, useEffect, useState } from "react";
import { getQuestions, Question } from "../components/QuestionFetcher";
import "../styles/CodeMatcher.css";
import QuestionDisplay from "../components/QuestionDisplay";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Submit");
  const [nextQuestionButton, setNextQuestionButton] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [animateCorrect, setAnimateCorrect] = useState(false);
  const [animateIncorrect, setAnimateIncorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchQuestions() {
      try {
        const fetchedQuestions = await getQuestions();
        setQuestions(fetchedQuestions);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Error fetching");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchQuestions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedRightCodeSnippet = normalizeWhitespace(
      currentQuestion.answerCorrect
    );

    const isCorrect = cleanedInputValue === cleanedRightCodeSnippet;
    if (nextQuestionButton) {
      resetStateForNextQuestion();
    } else if (isCorrect) {
      handleCorrectAnswer();
    } else {
      handleIncorrectAnswer();
    }
  };

  const resetStateForNextQuestion = () => {
    handleNextQuestion();
    setButtonText("Submit");
    setNextQuestionButton(false);
    setShowExplanation(false);
    setAnimateCorrect(false);
    setAnimateIncorrect(false);
  };
  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setButtonText("Next Question");
    setNextQuestionButton(true);
    setAnimateCorrect(true);
    setAnimateIncorrect(false);
    setTimeout(() => {
      setShowExplanation(true);
    }, 700);
  };
  const handleIncorrectAnswer = () => {
    setButtonText("Next Question");
    setNextQuestionButton(true);
    setAnimateCorrect(false);
    setAnimateIncorrect(true);
    setTimeout(() => {
      setShowExplanation(true);
    }, 700);
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
    <section className="center-holder">
      <QuestionDisplay question={currentQuestion} />
      <textarea
        value={inputValue}
        onChange={handleChange}
        placeholder="Type the code here"
      />
      <button
        onClick={handleCheck}
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
      <div>
        <p>Score:</p>
        <p
          className={
            animateCorrect
              ? "correct-answer"
              : animateIncorrect
              ? "incorrect-answer"
              : ""
          }
        >
          {score}
        </p>
      </div>
      <p>{showExplanation ? currentQuestion.explenationText : ""}</p>
    </section>
  );
}
export default CodeMatcher;
