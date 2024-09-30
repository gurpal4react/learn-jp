import React, { Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { N5Btns } from "../data/app/N5/HomeBtns";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../components/UI/ErrorPage";
import Loader from "../components/UI/Loader";

const LinkPage = lazy(() => import("../Pages/LinkPage"));
const CommonRoutes = lazy(() => import("./N5/CommonRoutes"));
const KanjiRoutes = lazy(() => import("./N5/KanjiRoutes"));
const GrammarRoutes = lazy(() => import("./N5/GrammarRoutes"));
const VocabRoutes = lazy(() => import("./N5/VocabRoutes"));

const N5Routes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<LinkPage title={"N5"} btnObj={N5Btns} />} />
          <Route path="/vocabulary/*" element={<VocabRoutes />} />
          <Route path="/grammar/*" element={<GrammarRoutes />} />
          <Route path="/kanji/*" element={<KanjiRoutes />} />
          <Route path="/common/*" element={<CommonRoutes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default N5Routes;
