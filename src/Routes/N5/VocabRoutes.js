import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { VocabBtns } from "../../data/app/N5/VocabBtns";
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
      <Suspense fallback={Loader}>
        <Routes>
          <Route index element={<LinkPage btnObj={VocabBtns} />} />
          <Route path="/list" element={<VocabularyList />} />
          <Route path="/reading-quiz" element={<VocabularyReadingQuiz />} />
          <Route path="/meaning-quiz" element={<VocabularyQuiz type="wtm" />} />
          <Route path="/word-quiz" element={<VocabularyQuiz type="mtw" />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default VocabRoutes;
