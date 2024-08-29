import { ChangeEvent, useEffect, useState } from "react";
import { getQuestions, Question } from "../components/QuestionFetcher";
import "../styles/CodeMatcher.css";
import QuestionDisplay from "../components/QuestionDisplay";
import { Link } from "react-router-dom";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Submit");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [endOfQuestions, setEndOfQuestions] = useState(false);
  const [stateOfAnitmation, setStateOfAnimation] = useState("");

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
    if (
      stateOfAnitmation == "handleCorrectAnswer" ||
      stateOfAnitmation == "handleIncorrectAnswer"
    ) {
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
    setStateOfAnimation("resetStateForNextQuestion");
  };
  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setButtonText("Next Question");
    if (currentQuestionIndex + 1 == questions.length) {
      setButtonText("Finish");
    }
    setStateOfAnimation("handleCorrectAnswer");
  };
  const handleIncorrectAnswer = () => {
    setButtonText("Next Question");
    if (currentQuestionIndex + 1 == questions.length) {
      setButtonText("Finish");
    }
    setStateOfAnimation("handleIncorrectAnswer");
  };

  const handleNextQuestion = (): void => {
    if (currentQuestionIndex + 1 == questions.length) {
      setEndOfQuestions(true);
    } else {
      setCurrentQuestionIndex((prevIndex) =>
        prevIndex < questions.length - 1 ? prevIndex + 1 : 0
      );
    }
    setInputValue("");
  };
  if (endOfQuestions) {
    return (
      <section className="center-holder">
        <p>You answered all the questions!</p>
        <div>
          <p>Score:</p>
          <p
            className={
              stateOfAnitmation == "handleCorrectAnswer"
                ? "correct-answer"
                : stateOfAnitmation == "handleIncorrectAnswer"
                ? "incorrect-answer"
                : ""
            }
          >
            {score}/{questions.length}
          </p>
        </div>
        <Link to="/Tests">Try again</Link>
      </section>
    );
  }
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
          stateOfAnitmation == "handleCorrectAnswer"
            ? "correct-answer-button"
            : stateOfAnitmation == "handleIncorrectAnswer"
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
      <p>
        Question: {currentQuestionIndex + 1}/{questions.length}
      </p>

      <p>
        {stateOfAnitmation == "handleCorrectAnswer" ||
        stateOfAnitmation == "handleIncorrectAnswer"
          ? currentQuestion.explenationText
          : ""}
      </p>
    </section>
  );
}
export default CodeMatcher;
