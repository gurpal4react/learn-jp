import React from "react";
import Home from "../Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListRoutes from "./ListRoutes";
import QuizRoutes from "./QuizRoutes";
import Layout from "../components/UI/Layout";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list/*" element={<ListRoutes />} />
          <Route path="/quiz/*" element={<QuizRoutes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
