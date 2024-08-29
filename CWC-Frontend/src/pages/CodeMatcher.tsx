import { useEffect, useState } from "react";
import { getQuestions, Question } from "../components/QuestionFetcher";
import "../styles/CodeMatcher.css";
import QuestionDisplay from "../components/QuestionDisplay";
import { Link } from "react-router-dom";
import ScoreAndButton from "../components/ScoreAndButton";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [score, setScore] = useState(0);
  const [buttonText, setButtonText] = useState("Submit");
  const [endOfQuestions, setEndOfQuestions] = useState(false);
  const [stateOfAnitmation, setStateOfAnimation] = useState("");
  const currentQuestion = questions[currentQuestionIndex];

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedCorrectCode = normalizeWhitespace(
      currentQuestion.answerCorrect
    );
    const isCorrect = cleanedInputValue === cleanedCorrectCode;
    if (
      stateOfAnitmation == "handleCorrectAnswer" ||
      stateOfAnitmation == "handleIncorrectAnswer"
    ) {
      handleNextQuestion();
      setButtonText("Submit");
      setStateOfAnimation("resetStateForNextQuestion");
    } else if (isCorrect) {
      setScore(score + 1);
      setButtonText("Next Question");
      setStateOfAnimation("handleCorrectAnswer");
    } else {
      setButtonText("Next Question");
      setStateOfAnimation("handleIncorrectAnswer");
    }
    if (currentQuestionIndex + 1 == questions.length) {
      setButtonText("Finish");
    }
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (endOfQuestions) {
    return (
      <section className="center-holder">
        <p>You answered all the questions!</p>
        <div>
          <p>Score:</p>
          <p>
            {score}/{questions.length}
          </p>
        </div>
        <Link to="/Tests">Try again</Link>
      </section>
    );
  }
  return (
    <section className="center-holder">
      <QuestionDisplay
        question={currentQuestion}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />

      <ScoreAndButton
        onClick={handleCheck}
        stateOfAnitmation={stateOfAnitmation}
        buttonText={buttonText}
        score={score}
      />
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
