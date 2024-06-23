import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLetterQuiz = (data, type) => {
  const navigate = useNavigate();
  const questionKey = type === "vocab" ? "jp" : "kana";
  const answerKey = type === "vocab" ? "pronunciation" : "roumaji";
  const [randomData, setRandomData] = useState([]);
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [finish, setFinish] = useState(false);
  const [timesWrong, setTimesWrong] = useState(null);
  const handleBlur = (e, answer) => {
    if (!e.target.value) return;
    if (e.target.value.toLowerCase() === answer[answerKey]) {
      setCorrect((prev) => [...prev, answer[questionKey]]);
    } else {
      setIncorrect((prev) => [...prev, answer[questionKey]]);
    }
  };
  const handleFinish = () => {
    setTimesWrong(
      [...incorrect]?.reduce(
        (attempts, d) => (
          attempts[d] ? (attempts[d] = attempts[d] + 1) : (attempts[d] = 1),
          attempts
        ),
        {}
      )
    );
    setFinish(true);
  };

  useEffect(() => {
    setRandomData(data.sort(() => 0.5 - Math.random()));
  }, [data]);

  const handleReset = () => navigate(0);
  return {
    randomData,
    correct,
    incorrect,
    finish,
    questionKey,
    answerKey,
    handleBlur,
    handleReset,
    handleFinish,
    timesWrong,
  };
};

export default useLetterQuiz;
