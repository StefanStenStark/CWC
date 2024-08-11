namespace CWC_Backend;

public record Question
{
    public string? QuestionText { get; init; }
    public string? AnswerCorrect { get; init; }
    public string? AnswerWrongOne { get; init; }
    public string? AnswerWrongTwo { get; init; }
    public string? AnswerWrongThree { get; init; }
    public string? ExplenationText { get; init; }

}