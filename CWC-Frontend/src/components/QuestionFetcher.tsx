export interface Question {
  questionText: string;
  answerCorrect: string;
  answerWrongOne: string;
  answerWrongTwo: string;
  explenationText: string;
}

export async function getQuestions(): Promise<Question[]> {
  const response = await fetch("http://localhost:5067/Questions");
  if (!response.ok) {
    throw new Error("Failed to fetch questions");
  }
  const data = await response.json();
  return data;
}
