import React, { useEffect, useState } from "react";
import { vocabulary } from "../data/japanese/vocabulary";
import Quiz from "../components/UI/Quiz";

const VocabularyQuiz = ({ type }) => {
  const [chapter, setChapter] = useState();
  const [allChapterData, setAllChapterData] = useState();
  useEffect(() => {
    if (chapter !== "all") {
      setAllChapterData(null);
    } else {
      const allChapterData = [];
      Object.values(vocabulary[0]).forEach((data) => {
        allChapterData.push(...data);
      });

      setAllChapterData(allChapterData);
    }
  }, [chapter]);

  return (
    <>
      {chapter ? (
        <Quiz
          questionData={allChapterData ?? vocabulary[0][chapter]}
          questionKey={type === "wtm" ? "jp" : "meaning"}
          optionKey={type === "wtm" ? "meaning" : "jp"}
        />
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
          <button className="chapter-button" onClick={() => setChapter("all")}>
            All
          </button>
        </>
      )}
    </>
  );
};

export default VocabularyQuiz;
