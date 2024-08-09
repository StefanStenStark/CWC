export function getQuestions() {
  return [
    {
      question: `How do you write a hook in React that runs one time?`,
      rightCodeSnippet: `useEffect(() => {}, []);`,
      wrongCodeSnippetOne: `useEffect() => {}, [];`,
      wrongCodeSnippetTwo: `useEffect(() => []);`,
      explanation: `The empty dependency array ([]) ensures that the useEffect hook runs only once after the initial render.`,
    },
    {
      question: `How do you write a hook in React that runs on every render?`,
      rightCodeSnippet: `useEffect(() => {});`,
      wrongCodeSnippetOne: `useEffect(() => [], []);`,
      wrongCodeSnippetTwo: `useEffect([] => {});`,
      explanation: `Without a dependency array, the useEffect hook runs after every render of the component.`,
    },
    {
      question: `How do you write a basic function in JavaScript?`,
      rightCodeSnippet: `function myFunction() {}`,
      wrongCodeSnippetOne: `function = myFunction() {}`,
      wrongCodeSnippetTwo: `myFunction() {}`,
      explanation: `A function in JavaScript is defined using the "function" keyword followed by the function name and parentheses.`,
    },
  ];
}
