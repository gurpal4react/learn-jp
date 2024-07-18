import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LinkPage from "../../Pages/LinkPage";
import { GrammarBtns } from "../../data/app/N5/GrammarBtns";

import { e_adjective } from "../../data/japanese/e_adjective";
import { na_adjective } from "../../data/japanese/na_adjective";
import { particles } from "../../data/japanese/particles";
import { adverbs } from "../../data/japanese/adverbs";
import ListComponent from "../../components/UI/List";
import Quiz from "../../components/UI/Quiz";
import { particles_practice } from "../../data/japanese/particles_practice";

const GrammarRoutes = () => {
  return (
    <Routes>
      <Route index element={<LinkPage btnObj={GrammarBtns} />} />
      <Route
        path="/e-adjectives-list"
        element={
          <ListComponent
            data={e_adjective}
            mainKey="jp"
            heading="List of い - Adjectives"
          />
        }
      />
      <Route
        path="/na-adjectives-list"
        element={
          <ListComponent
            data={na_adjective}
            mainKey="jp"
            heading="List of な - Adjectives"
          />
        }
      />
      <Route
        path="/adverbs-list"
        element={
          <ListComponent
            data={adverbs}
            mainKey="jp"
            heading="List of Adverbs"
          />
        }
      />
      <Route
        path="/particles-list"
        element={
          <ListComponent
            data={particles}
            mainKey="jp"
            heading="List of Particles"
          />
        }
      />
      <Route
        path="/particles-quiz"
        element={
          <Quiz
            questionData={particles_practice}
            questionKey={"question"}
            optionKey={"answer"}
            limit={10}
          />
        }
      />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default GrammarRoutes;
