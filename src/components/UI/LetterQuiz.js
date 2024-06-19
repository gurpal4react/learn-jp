import React from "react";
import useLetterQuiz from "../hooks/useLetterQuiz";

const LettersQuiz = ({ data, type }) => {
  const {
    randomData,
    correct,
    incorrect,
    finish,
    questionKey,
    answerKey,
    handleBlur,
    handleReset,
    handleFinish,
  } = useLetterQuiz(data, type);
  return (
    <>
      <div className="letter-list">
        {randomData?.map((letter) => {
          return (
            <div
              className={`letter-element ${
                correct.indexOf(letter[questionKey]) !== -1
                  ? "correct"
                  : incorrect.indexOf(letter[questionKey]) !== -1
                  ? "incorrect"
                  : ""
              }`}
            >
              <div>{letter[questionKey]}</div>
              {finish && <div>{letter[answerKey]}</div>}{" "}
              <input
                autoComplete="off"
                name={answerKey}
                disabled={finish || correct.indexOf(letter[questionKey]) !== -1}
                onBlur={(e) => handleBlur(e, letter)}
              />
            </div>
          );
        })}
      </div>
      {!finish && (
        <button className="quiz-button" onClick={handleFinish}>
          Finish
        </button>
      )}
      <button onClick={handleReset} className="quiz-button">
        Restart
      </button>
    </>
  );
};

export default LettersQuiz;
