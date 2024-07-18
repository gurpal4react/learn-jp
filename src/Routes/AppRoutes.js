import React from "react";
import LinkPage from "../Pages/LinkPage";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Layout from "../components/UI/Layout";
import { HomeBtns } from "../data/app/HomeBtns";
import LetterRoutes from "./LetterRoutes";
import N5Routes from "./N5Routes";

const AppRoutes = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LinkPage btnObj={HomeBtns}/>} />
          <Route path='/letters/*' element={<LetterRoutes/>}/>
          <Route path='/N5/*' element={<N5Routes/>}/>
          <Route path="*" element={<Navigate to={'/'}/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
