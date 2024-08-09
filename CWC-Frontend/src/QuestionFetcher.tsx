export function getQuestion() {
  return {
    question: `How do you write a hook in React?`,
    rightCodeSnippet: `useEffect(() => {}, []);`,
    wrongCodeSnippetOne: `useEffect() => {}, [];`,
    wrongCodeSnippetTwo: `useEffect(() => []);`,
  };
}
