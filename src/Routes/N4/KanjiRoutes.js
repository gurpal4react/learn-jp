import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { KanjiBtns } from "../../data/app/N4/KanjiBtns";
import Loader from "../../components/UI/Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../components/UI/ErrorPage";
import listService from "../../Services/list";
import quizService from "../../Services/quiz";

const LinkPage = lazy(() => import("../../Pages/LinkPage"));
const ListComponent = lazy(() => import("../../components/UI/List"));
const Quiz = lazy(() => import("../../components/UI/Quiz"));

const KanjiRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={<LinkPage title={"N4 Kanji"} btnObj={KanjiBtns} />}
          />
          <Route
            path="/list"
            element={
              <ListComponent
                dataService={listService.getKanji}
                level="n4"
                mainKey="kanji"
                heading="List of Kanji for N4"
                noShowKeys={["type"]}
              />
            }
          />
          <Route
            path="/quiz"
            element={<Quiz questionService={quizService.getKanji} level="n4" />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default KanjiRoutes;