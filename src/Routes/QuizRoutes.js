import React from "react";
import { Route, Routes } from "react-router-dom";
import LettersQuiz from "../components/UI/LetterQuiz";
import Quiz from "../components/UI/Quiz";
import VocabularyQuiz from "../Pages/VocabularyQuiz";
import VocabularyReadingQuiz from "../Pages/VocabularyReadingQuiz";
import { katakana } from "../data/japanese/katakana";
import { hiragana } from "../data/japanese/hiragana";
import { Kanji } from "../data/japanese/kanji";
import { particles_practice } from "../data/japanese/particles_practice";

const QuizRoutes = () => {
  return (
    <Routes>
      <Route path="/hiragana" element={<LettersQuiz data={hiragana} />} />
      <Route path="/katakana" element={<LettersQuiz data={katakana} />} />
      <Route
        path="/letters"
        element={
          <Quiz
            questionData={[...hiragana, ...katakana]}
            questionKey={"kana"}
            optionKey={"roumaji"}
            limit={10}
          />
        }
      />
      <Route path="/vocabulary-reading" element={<VocabularyReadingQuiz />} />
      <Route
        path="/vocabulary-meaning"
        element={<VocabularyQuiz type={"wtm"} />}
      />
      <Route
        path="/vocabulary-word"
        element={<VocabularyQuiz type={"mtw"} />}
      />
      <Route
        path="/kanji"
        element={
          <Quiz
            questionData={Kanji}
            questionKey={"kanji"}
            optionKey={"jp"}
          />
        }
      />
      <Route
        path="/particles"
        element={
          <Quiz
            questionData={particles_practice}
            questionKey={"question"}
            optionKey={"answer"}
            limit={10}
          />
        }
      />
    </Routes>
  );
};

export default QuizRoutes;
