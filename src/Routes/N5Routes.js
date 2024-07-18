import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LinkPage from "../Pages/LinkPage";
import { N5Btns } from "../data/app/N5/HomeBtns";
import CommonRoutes from "./N5/CommonRoutes";
import KanjiRoutes from "./N5/KanjiRoutes";
import GrammarRoutes from "./N5/GrammarRoutes";
import VocabRoutes from "./N5/VocabRoutes";

const N5Routes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={N5Btns} />} />
      <Route path="/vocabulary/*" element={<VocabRoutes />} />
      <Route path="/grammar/*" element={<GrammarRoutes />} />
      <Route path="/kanji/*" element={<KanjiRoutes />} />
      <Route path="/common/*" element={<CommonRoutes />} />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default N5Routes;
