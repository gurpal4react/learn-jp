import React from "react";
import ListComponent from "../components/UI/List";
import useVocabularyList from "../components/hooks/useVocabularyList";
import Loader from "../components/UI/Loader";

const VocabularyList = () => {
  const level = 'n5'
  const { data, loading, chapterRef } = useVocabularyList(level);
  return loading || !data ? (
    <Loader />
  ) : (
    <>
      <div>
        <h1 className="list-heading">List of Vocabulary</h1>
        <h3 className="list-heading">Go to Chapter</h3>
        {Object.keys(data)?.map((chapter) => {
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
        {Object.keys(data)?.map((chapter, chapter_no) => {
          return (
            <div
              key={chapter_no}
              className="list"
              ref={(el) => (chapterRef.current[chapter] = el)}
            >
              <ListComponent
                dataValues={data[chapter]}
                heading={`Chapter ${chapter}`}
                mainKey="jp"
                noShowKeys={["lesson", "type"]}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VocabularyList;
