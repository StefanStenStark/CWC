using Microsoft.AspNetCore.Mvc;

namespace CWC_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionsController : ControllerBase
    {
        private static List<Question> questions = new List<Question>
        {
            new Question
            {
                QuestionText = "How do you write a hook in React that runs one time?",
                AnswerCorrect = "useEffect(() => {}, []);",
                AnswerWrongOne = "useEffect() => {}, [];",
                AnswerWrongTwo = "useEffect(() => []);",
                ExplenationText = "The correct answer uses an empty dependency array to ensure the hook runs only once after the initial render."
            },
            new Question
            {
                QuestionText = "How do you write a hook in React that runs on every render?",
                AnswerCorrect = "useEffect(() => {});",
                AnswerWrongOne = "useEffect(() => [], []);",
                AnswerWrongTwo = "useEffect([] => {});",
                ExplenationText = "The correct answer does not include a dependency array, so the hook runs after every render."
            },
            new Question
            {
                QuestionText = "How do you write a basic function in JavaScript?",
                AnswerCorrect = "function myFunction() {};",
                AnswerWrongOne = "function = myFunction() {};",
                AnswerWrongTwo = "myFunction() {};",
                ExplenationText = "The correct answer is the proper syntax for defining a named function in JavaScript."
            },
            new Question
            {
                QuestionText = "How do you set up a const with useState in React?",
                AnswerCorrect = "const [number, setNumber] = useState(1)",
                AnswerWrongOne = "const = [number, setNumber] = useState(1)",
                AnswerWrongTwo = "const [number, setNumber] useState(1)",
                ExplenationText = "Use const with useState to declare state variables and their updater function in React."
            },
            new Question
            {
                QuestionText = "How do you declare a constant variable with the value 42 in JavaScript?",
                AnswerCorrect = "const x = 42;",
                AnswerWrongOne = "const = x 42;",
                AnswerWrongTwo = "const x : 42;",
                ExplenationText = "The correct way is to use `const` keyword followed by the variable name, then `=`, and the value you want to assign. "
            },
            new Question
            {
                QuestionText = "How do you write a fetch without handeling the data?",
                AnswerCorrect = "fetch('api');",
                AnswerWrongOne = "fetch = ('api');",
                AnswerWrongTwo = "fetch = 'api';",
                ExplenationText = "No need to use the ="
            },
            new Question
            {
                QuestionText = "How do you fetch data and handle the response in JavaScript?",
                AnswerCorrect = "fetch('https://data').then(response => response.json()).then(data => console.log(data));",
                AnswerWrongOne = "fetch('https://data').then(response => response.json()); console.log(data);",
                AnswerWrongTwo = "fetch('https://data').then(data => console.log(response.json()));",
                ExplenationText = "Use `.then` to handle the response and process the data after fetching."
            }
           
        };

        [HttpGet]
        public List<Question> Get()
        {
            return questions;
        }
    }
}