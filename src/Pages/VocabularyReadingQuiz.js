import React, { useState } from "react";
import { vocabulary } from "../data/japanese/vocabulary";
import LettersQuiz from "../components/UI/LetterQuiz";

const VocabularyReadingQuiz = () => {
  const [chapter, setChapter] = useState(null);

  return (
    <>
      {chapter ? (
        <LettersQuiz data={vocabulary[0][chapter]} type="vocab" />
      ) : (
        <>
          <h1>Select Chapter for which you want to quiz for</h1>
          {Object.keys(vocabulary[0])?.map((chapter) => {
            return (
              <button
                className="chapter-button"
                onClick={() => setChapter(chapter)}
              >
                {chapter}
              </button>
            );
          })}
        </>
      )}
    </>
  );
};

export default VocabularyReadingQuiz;
