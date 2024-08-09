import { ChangeEvent, useState } from "react";

function CodeMatcher() {
  const [inputValue, setInputValue] = useState("");
  const [isMatch, setIsMatch] = useState<boolean | null>(null);
  const rightCodeSnippet = `useEffect(() => {}, []);`;
  const wrongCodeSnippetOne = `useEffect() => {}, [];`;
  const wrongCodeSnippetTwo = `useEffect(() => []);`;

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const handleCheck = (): void => {
    const cleanedInputValue = inputValue.replace(/\s+/g, "");
    const cleanedrightCodeSnippet = rightCodeSnippet.replace(/\s+/g, "");
    setIsMatch(cleanedInputValue === cleanedrightCodeSnippet);
  };

  return (
    <div>
      <p>How do you write a hook in react?</p>
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
