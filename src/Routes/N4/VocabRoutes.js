import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { VocabBtns } from "../../data/app/N4/VocabBtns";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../components/UI/ErrorPage";
import Loader from "../../components/UI/Loader";

const LinkPage = lazy(() => import("../../Pages/LinkPage"));
const VocabularyReadingQuiz = lazy(() =>
  import("../../Pages/VocabularyReadingQuiz")
);
const VocabularyList = lazy(() => import("../../Pages/VocabularyList"));
const VocabularyQuiz = lazy(() => import("../../Pages/VocabularyQuiz"));

const VocabRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={<LinkPage title={"N4 Vocabulary"} btnObj={VocabBtns} />}
          />
          <Route path="/list" element={<VocabularyList level="n4" />} />
          <Route
            path="/reading-quiz"
            element={<VocabularyReadingQuiz level="n4" />}
          />
          <Route
            path="/meaning-quiz"
            element={<VocabularyQuiz type="wtm" level="n4" />}
          />
          <Route
            path="/word-quiz"
            element={<VocabularyQuiz type="mtw" level="n4" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default VocabRoutes;
