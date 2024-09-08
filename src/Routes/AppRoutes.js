import React, { Suspense, lazy } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import { HomeBtns } from "../data/app/HomeBtns";
import Loader from "../components/UI/Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../components/UI/ErrorPage";

const Layout = lazy(() => import("../components/UI/Layout"));
const LinkPage = lazy(() => import("../Pages/LinkPage"));
const LetterRoutes = lazy(() => import("./LetterRoutes"));
const N5Routes = lazy(() => import("./N5Routes"));
const N4Routes = lazy(() => import("./N4Routes"));

const AppRoutes = () => {
  return (
    <HashRouter>
      <ErrorBoundary fallback={<ErrorPage />}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LinkPage btnObj={HomeBtns} />} />
              <Route path="/letters/*" element={<LetterRoutes />} />
              <Route path="/N5/*" element={<N5Routes />} />
              <Route path="/N4/*" element={<N4Routes />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </HashRouter>
  );
};

export default AppRoutes;
