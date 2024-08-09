export function getQuestions() {
  return [
    {
      question: `How do you write a hook in React that runs one time?`,
      rightCodeSnippet: `useEffect(() => {}, []);`,
      wrongCodeSnippetOne: `useEffect() => {}, [];`,
      wrongCodeSnippetTwo: `useEffect(() => []);`,
    },
    {
      question: `How do you write a hook in React that runs on every render?`,
      rightCodeSnippet: `useEffect(() => {});`,
      wrongCodeSnippetOne: `useEffect(() => [], []);`,
      wrongCodeSnippetTwo: `useEffect([] => {});`,
    },
    {
      question: `How do you write a basic function in JavaScript?`,
      rightCodeSnippet: `function myFunction() {}`,
      wrongCodeSnippetOne: `function = myFunction() {}`,
      wrongCodeSnippetTwo: `myFunction() {}`,
    },
  ];
}
