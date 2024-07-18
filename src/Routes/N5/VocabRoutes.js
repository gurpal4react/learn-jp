import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LinkPage from "../../Pages/LinkPage";
import { VocabBtns } from "../../data/app/N5/VocabBtns";
import VocabularyReadingQuiz from "../../Pages/VocabularyReadingQuiz";
import VocabularyList from "../../Pages/VocabularyList";
import VocabularyQuiz from "../../Pages/VocabularyQuiz";

const VocabRoutes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={VocabBtns} />} />
      <Route path="/list" element={<VocabularyList />} />
      <Route path="/reading-quiz" element={<VocabularyReadingQuiz />} />
      <Route
        path="/meaning-quiz"
        element={<VocabularyQuiz type={"wtm"} />}
      />
      <Route
        path="/word-quiz"
        element={<VocabularyQuiz type={"mtw"} />}
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default VocabRoutes;
