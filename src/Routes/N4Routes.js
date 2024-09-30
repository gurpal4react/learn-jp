import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { N4Btns } from "../data/app/N4/HomeBtns";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../components/UI/ErrorPage";
import Loader from "../components/UI/Loader";

const LinkPage = lazy(() => import("../Pages/LinkPage"));
const KanjiRoutes = lazy(() => import("./N4/KanjiRoutes"));
const GrammarRoutes = lazy(() => import("./N4/GrammarRoutes"));
const VocabRoutes = lazy(() => import("./N4/VocabRoutes"));

const N4Routes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<LinkPage title={"N4"} btnObj={N4Btns} />} />
          <Route path="/vocabulary/*" element={<VocabRoutes />} />
          <Route path="/grammar/*" element={<GrammarRoutes />} />
          <Route path="/kanji/*" element={<KanjiRoutes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default N4Routes;
