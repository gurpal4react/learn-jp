import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LetterBtns } from "../data/app/LetterBtns";
import Loader from "../components/UI/Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../components/UI/ErrorPage";
import listService from "../Services/list";
import quizService from "../Services/quiz";

const LinkPage = lazy(() => import("../Pages/LinkPage"));
const LettersQuiz = lazy(() => import("../components/UI/LetterQuiz"));
const Quiz = lazy(() => import("../components/UI/Quiz"));
const ListComponent = lazy(() => import("../components/UI/List"));

const LetterRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={<LinkPage title={"Letter"} btnObj={LetterBtns} />}
          />
          <Route
            path="/hiragana-list"
            element={
              <ListComponent
                heading="List of Letters in Hiragana"
                dataService={listService.getHiragana}
                mainKey="kana"
                letter={true}
                noShowKeys={["type"]}
              />
            }
          />
          <Route
            path="/katakana-list"
            element={
              <ListComponent
                heading="List of Letters in Katakana"
                dataService={listService.getKatakana}
                mainKey="kana"
                letter={true}
                noShowKeys={["type"]}
              />
            }
          />
          <Route
            path="/katakana-reading-list"
            element={
              <ListComponent
                dataService={listService.getKatakanaReading}
                mainKey="jp"
                heading="List of Katakana Words"
              />
            }
          />
          <Route
            path="/hiragana-quiz"
            element={<LettersQuiz dataService={listService.getHiragana} />}
          />
          <Route
            path="/katakana-quiz"
            element={<LettersQuiz dataService={listService.getKatakana} />}
          />
          <Route
            path="/combined-quiz"
            element={
              <Quiz questionService={quizService.getLetters} limit={10} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default LetterRoutes;
