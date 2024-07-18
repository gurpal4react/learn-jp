import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { LetterBtns } from "../data/app/LetterBtns";
import LinkPage from "../Pages/LinkPage";
import LettersQuiz from "../components/UI/LetterQuiz";
import Quiz from "../components/UI/Quiz";
import ListComponent from "../components/UI/List";

import { hiragana } from "../data/japanese/hiragana";
import { katakana } from "../data/japanese/katakana";
import { katakana_reading } from "../data/japanese/katakana_reading";

const LetterRoutes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={LetterBtns} />} />
      <Route
        path="/hiragana-list"
        element={
          <ListComponent
            heading={"List of Letters in Hiragana"}
            data={hiragana}
            letter={true}
            noShowKeys={["type"]}
          />
        }
      />
      <Route
        path="/katakana-list"
        element={
          <ListComponent
            heading={"List of Letters in Katakana"}
            data={katakana}
            letter={true}
            noShowKeys={["type"]}
          />
        }
      />
      <Route
        path="/katakana-reading-list"
        element={
          <ListComponent
            data={katakana_reading}
            mainKey="jp"
            heading="List of Katakana Words"
          />
        }
      />
      <Route path="/hiragana-quiz" element={<LettersQuiz data={hiragana} />} />
      <Route path="/katakana-quiz" element={<LettersQuiz data={katakana} />} />
      <Route
        path="/combined-quiz"
        element={
          <Quiz
            questionData={[...hiragana, ...katakana]}
            questionKey={"kana"}
            optionKey={"roumaji"}
            limit={10}
          />
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default LetterRoutes;
