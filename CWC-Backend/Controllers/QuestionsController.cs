using Microsoft.AspNetCore.Mvc;

namespace CWC_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionsController : ControllerBase
    {
        public static List<Question> questions = new List<Question>
        {
            new Question
            {
                QuestionText = "How do you write a hook in React that runs one time?",
                AnswerCorrect = "useEffect(() => {}, []);",
                AnswerWrongOne = "useEffect() => {}, [];",
                AnswerWrongTwo = "useEffect(() => []);",
                AnswerWrongThree = "useEffect([() => {}], []);",
                ExplenationText = "The correct answer uses an empty dependency array to ensure the hook runs only once after the initial render."
            },
            new Question
            {
                QuestionText = "How do you write a hook in React that runs on every render?",
                AnswerCorrect = "useEffect(() => {});",
                AnswerWrongOne = "useEffect(() => [], []);",
                AnswerWrongTwo = "useEffect([] => {});",
                AnswerWrongThree = "useEffect(() => {}, [variable]);",
                ExplenationText = "The correct answer does not include a dependency array, so the hook runs after every render."
            },
            new Question
            {
                QuestionText = "How do you write a basic function in JavaScript?",
                AnswerCorrect = "function myFunction() {}",
                AnswerWrongOne = "function = myFunction() {};",
                AnswerWrongTwo = "myFunction() {};",
                AnswerWrongThree = "let myFunction = {}; function myFunction() {};",
                ExplenationText = "The correct answer is the proper syntax for defining a named function in JavaScript."
            }
           
        };

        [HttpGet]
        public List<Question> Get()
        {
            return questions;
        }
    }
}