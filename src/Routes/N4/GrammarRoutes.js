import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { GrammarBtns } from "../../data/app/N4/GrammarBtns";
import Loader from "../../components/UI/Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../components/UI/ErrorPage";
import listService from "../../Services/list";

const LinkPage = lazy(() => import("../../Pages/LinkPage"));
const ListComponent = lazy(() => import("../../components/UI/List"));

const GrammarRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            index
            element={<LinkPage title={"N4 Grammar"} btnObj={GrammarBtns} />}
          />
          <Route
            path="/e-adjectives-list"
            element={
              <ListComponent
                dataService={listService.getEAdjective}
                mainKey="jp"
                heading="List of い - Adjectives"
                level="n4"
              />
            }
          />
          <Route
            path="/na-adjectives-list"
            element={
              <ListComponent
                dataService={listService.getNaAdjective}
                mainKey="jp"
                heading="List of な - Adjectives"
                level="n4"
              />
            }
          />
          <Route
            path="/adverbs-list"
            element={
              <ListComponent
                dataService={listService.getAdverbs}
                mainKey="jp"
                heading="List of Adverbs"
                level="n4"
              />
            }
          />
          <Route
            path="/particles-list"
            element={
              <ListComponent
                dataService={listService.getParticles}
                mainKey="jp"
                heading="List of Particles"
                level="n4"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default GrammarRoutes;
