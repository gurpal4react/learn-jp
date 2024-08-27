import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CommonBtns } from "../../data/app/N5/CommonBtns";
import Loader from "../../components/UI/Loader";
import { ErrorBoundary } from "react-error-boundary";
import ErrorPage from "../../components/UI/ErrorPage";
import listService from "../../Services/list";

const LinkPage = lazy(() => import("../../Pages/LinkPage"));
const ListComponent = lazy(() => import("../../components/UI/List"));

const CommonRoutes = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Suspense fallback={Loader}>
        <Routes>
          <Route index element={<LinkPage btnObj={CommonBtns} />} />
          <Route
            path="time"
            element={
              <ListComponent
                dataService={listService.getTime}
                mainKey="jp"
                heading="Time"
              />
            }
          />
          <Route
            path="counting"
            element={
              <ListComponent
                dataService={listService.getCounting}
                mainKey="jp"
                heading="Counting"
              />
            }
          />
          <Route
            path="directions-and-positions"
            element={
              <ListComponent
                dataService={listService.getDirections}
                mainKey="jp"
                heading="Directions & Positions"
              />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default CommonRoutes;
