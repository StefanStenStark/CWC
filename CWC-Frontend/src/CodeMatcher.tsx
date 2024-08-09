import { ChangeEvent, useState } from "react";
import { getQuestion } from "./QuestionFetcher";

const normalizeWhitespace = (text: string): string => {
  return text.replace(/\s+/g, " ").trim();
};

function CodeMatcher() {
  const [inputValue, setInputValue] = useState("");
  const [isMatch, setIsMatch] = useState<boolean | null>(null);
  const question = getQuestion().question;
  const rightCodeSnippet = getQuestion().rightCodeSnippet;
  const wrongCodeSnippetOne = getQuestion().wrongCodeSnippetOne;
  const wrongCodeSnippetTwo = getQuestion().wrongCodeSnippetTwo;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = normalizeWhitespace(inputValue);
    const cleanedrightCodeSnippet = normalizeWhitespace(rightCodeSnippet);
    setIsMatch(cleanedInputValue === cleanedrightCodeSnippet);
  };

  return (
    <div>
      <p>{question}</p>
      <div>
        <pre>
          <code>{rightCodeSnippet}</code>
        </pre>
      </div>

      <div>
        <pre>
          <code>{wrongCodeSnippetOne}</code>
        </pre>
      </div>

      <div>
        <pre>
          <code>{wrongCodeSnippetTwo}</code>
        </pre>
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type the code here"
      />
      <button
        onClick={handleCheck}
        style={{ display: "block", marginTop: "10px" }}
      >
        Check Code
      </button>
      <p>
        {isMatch === null
          ? 'Enter the code and press "Check Code"'
          : isMatch
          ? "Code matches!"
          : "Code does not match."}
      </p>
    </div>
  );
}

export default CodeMatcher;
