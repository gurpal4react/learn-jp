import React from "react";
import Home from "../Pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import ListRoutes from "./ListRoutes";
import QuizRoutes from "./QuizRoutes";
import Layout from "../components/UI/Layout";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list/*" element={<ListRoutes />} />
          <Route path="/quiz/*" element={<QuizRoutes />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
