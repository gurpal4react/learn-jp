import React, { useState } from "react";
import Quiz from "../components/UI/Quiz";
import quizService from "../Services/quiz";

const VocabularyQuiz = ({ type }) => {
  const [chapter, setChapter] = useState();

  return (
    <>
      {chapter ? (
        <Quiz
          questionService={
            type === "mtw"
              ? quizService.getVocabularyMeaningToWord
              : quizService.getVocabularyWordToMeaning
          }
          level="n5"
          lesson={chapter}
        />
      ) : (
        <>
          <h1>Select Chapter for which you want to quiz for</h1>
          {Array.from({ length: 25 }, (_, index) => index + 1)?.map(
            (chapter) => {
              return (
                <button
                  className="chapter-button"
                  onClick={() => setChapter(chapter)}
                >
                  {chapter}
                </button>
              );
            }
          )}
          <button className="chapter-button" onClick={() => setChapter("all")}>
            All
          </button>
        </>
      )}
    </>
  );
};

export default VocabularyQuiz;
