import React from "react";
import useQuiz from "../hooks/useQuiz";
import Loader from "../UI/Loader";
import { AiOutlineReload } from "react-icons/ai";

const Quiz = ({ questionService, level, limit, lesson }) => {
  const {
    questions,
    questionIndex,
    handleAnswer,
    goNext,
    handleReset,
    currentAnswer,
    totalCorrect,
    loading,
  } = useQuiz(questionService, level, lesson, limit);
  return loading ? (
    <Loader />
  ) : (
    <>
      <div className="question-container">
        {questionIndex < questions?.length && (
          <>
            <div className="question">{questions[questionIndex].question}</div>
            <div className="option-list">
              {questions[questionIndex]?.options?.map((option, index) => {
                return (
                  <div
                    className={
                      currentAnswer
                        ? option === questions[questionIndex].answer
                          ? "option correct"
                          : option === currentAnswer
                          ? "option incorrect"
                          : "option"
                        : "option"
                    }
                    onClick={() => {
                      handleAnswer(option);
                    }}
                    key={index}
                  >
                    {option}
                  </div>
                );
              })}
            </div>
            <button onClick={goNext} className="quiz-button">
              Next
            </button>
          </>
        )}
        <AiOutlineReload
          size={20}
          onClick={handleReset}
          className="quiz-button"
        />
        <div>Total Questions: {questions?.length}</div>
        {questionIndex < questions?.length && (
          <div>Current Question Number: {questionIndex + 1}</div>
        )}
        <div>Correct Questions: {totalCorrect}</div>
        <div>
          Incorrect Questions:&nbsp;
          {questionIndex - totalCorrect > 0 ? questionIndex - totalCorrect : 0}
        </div>
      </div>
    </>
  );
};

export default Quiz;
