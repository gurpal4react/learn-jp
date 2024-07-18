import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LinkPage from "../../Pages/LinkPage";
import { KanjiBtns } from "../../data/app/N5/KanjiBtns";
import { Kanji } from "../../data/japanese/kanji";
import ListComponent from "../../components/UI/List";
import Quiz from "../../components/UI/Quiz";


const KanjiRoutes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={KanjiBtns} />} />
      <Route
        path="/list"
        element={
          <ListComponent
            data={Kanji}
            mainKey={"kanji"}
            heading={"List of Kanji for N5"}
            noShowKeys={["type"]}
          />
        }
      />
      <Route
        path="/quiz"
        element={
          <Quiz
            questionData={Kanji}
            questionKey={"kanji"}
            optionKey={"jp"}
          />
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default KanjiRoutes;
