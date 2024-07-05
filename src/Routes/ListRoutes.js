import React from "react";
import { Route, Routes } from "react-router-dom";
import ListComponent from "../components/UI/List";
import VocabularyList from "../Pages/VocabularyList";
import { hiragana } from "../data/japanese/hiragana";
import { katakana } from "../data/japanese/katakana";
import { katakana_reading } from "../data/japanese/katakana_reading";
import { Kanji } from "../data/japanese/kanji";
import { e_adjective } from "../data/japanese/e_adjective";
import { na_adjective } from "../data/japanese/na_adjective";
import { particles } from "../data/japanese/particles";
import { adverbs } from "../data/japanese/adverbs";
import { time } from "../data/japanese/time";
import { directions } from "../data/japanese/directions";
import { counting } from "../data/japanese/counting";

const ListRoutes = () => {
  return (
    <Routes>
      <Route
        path="/hiragana"
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
        path="/katakana"
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
        path="/katakana-reading"
        element={
          <ListComponent
            data={katakana_reading}
            mainKey="jp"
            heading="List of Katakana Words"
          />
        }
      />
      <Route
        path="/kanji"
        element={
          <ListComponent
            data={Kanji}
            mainKey={"kanji"}
            heading={"List of Kanji for N5"}
            noShowKeys={["type"]}
          />
        }
      />
      <Route path="/vocabulary" element={<VocabularyList />} />
      <Route
        path="/e-adjectives"
        element={
          <ListComponent
            data={e_adjective}
            mainKey="jp"
            heading="List of い - Adjectives"
          />
        }
      />
      <Route
        path="/na-adjectives"
        element={
          <ListComponent
            data={na_adjective}
            mainKey="jp"
            heading="List of な - Adjectives"
          />
        }
      />
      <Route
        path="/adverbs"
        element={
          <ListComponent
            data={adverbs}
            mainKey="jp"
            heading="List of Adverbs"
          />
        }
      />
      <Route
        path="/particles"
        element={
          <ListComponent
            data={particles}
            mainKey="jp"
            heading="List of Particles"
          />
        }
      />
      <Route
        path="/common/time"
        element={<ListComponent data={time} mainKey="jp" heading="Time" />}
      />
      <Route
        path="/common/counting"
        element={
          <ListComponent data={counting} mainKey="jp" heading="Counting" />
        }
      />
      <Route
        path="/common/directions"
        element={
          <ListComponent data={directions} mainKey="jp" heading="Directions" />
        }
      />
    </Routes>
  );
};

export default ListRoutes;
