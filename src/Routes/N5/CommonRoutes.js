import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LinkPage from "../../Pages/LinkPage";
import { CommonBtns } from "../../data/app/N5/CommonBtns";
import { counting } from "../../data/japanese/counting";
import { time } from "../../data/japanese/time";
import { directions } from "../../data/japanese/directions";
import ListComponent from "../../components/UI/List";

const CommonRoutes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={CommonBtns} />} />
      <Route
        path="time"
        element={<ListComponent data={time} mainKey="jp" heading="Time" />}
      />
      <Route
        path="counting"
        element={
          <ListComponent data={counting} mainKey="jp" heading="Counting" />
        }
      />
      <Route
        path="directions-and-positions"
        element={
          <ListComponent data={directions} mainKey="jp" heading="Directions & Positions" />
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default CommonRoutes;
