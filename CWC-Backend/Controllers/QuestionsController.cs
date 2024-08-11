using Microsoft.AspNetCore.Mvc;

namespace CWC_Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class QuestionsController : ControllerBase
    {
        [HttpGet]
        public List<Question> Get()
        {
            return QuestionsInList.questions;
        }
    }
}