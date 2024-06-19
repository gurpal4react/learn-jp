import React, { useRef } from "react";
import { vocabulary } from "../data/japanese/vocabulary";
import ListComponent from "../components/UI/List";

const VocabularyList = () => {
  const chapterRef = useRef([]);
  return (
    <>
      <div>
        <h1 className="list-heading">List of Vocabulary</h1>
        <h3 className="list-heading">Go to Chapter</h3>
        {Object.keys(vocabulary[0])?.map((chapter) => {
          return (
            <button
              className="chapter-button"
              onClick={() =>
                window.scrollTo({
                  top: chapterRef.current[chapter].offsetTop,
                  behavior: "smooth",
                })
              }
            >
              {chapter}
            </button>
          );
        })}
        {Object.keys(vocabulary[0])?.map((chapter, chapter_no) => {
          return (
            <div
              key={chapter_no}
              className="list"
              ref={(el) => (chapterRef.current[chapter] = el)}
            >
              <ListComponent
                data={vocabulary[0][chapter]}
                heading={`Chapter ${chapter}`}
                mainKey="jp"
                noShowKeys={["lesson"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VocabularyList;
