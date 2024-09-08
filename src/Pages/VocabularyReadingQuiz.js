import React, { useState } from "react";
import LettersQuiz from "../components/UI/LetterQuiz";
import listService from "../Services/list";
import { lessonStart } from "../data/app/LessonStart";

const VocabularyReadingQuiz = ({ level }) => {
  const [chapter, setChapter] = useState(null);

  return (
    <>
      {chapter ? (
        <LettersQuiz
          dataService={listService.getVocabulary}
          level={level}
          lesson={chapter}
          type="vocab"
        />
      ) : (
        <>
          <h1>Select Chapter for which you want to quiz for</h1>
          {Array.from(
            { length: 25 },
            (_, index) => index + lessonStart[level]
          )?.map((chapter) => {
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
