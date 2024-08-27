import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useLetterQuiz = (dataService, level, lesson, type) => {
  const navigate = useNavigate();
  const questionKey = type === "vocab" ? "jp" : "kana";
  const answerKey = type === "vocab" ? "pronunciation" : "roumaji";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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
          // eslint-disable-next-line
          attempts[d] ? (attempts[d] = attempts[d] + 1) : (attempts[d] = 1),
          attempts
        ),
        {}
      )
    );
    setFinish(true);
  };

  useEffect(() => {
    if (!dataService) return;
    const getData = async () => {
      try {
        if (type === "vocab") {
          if (!lesson || !level) return;
          const data = await dataService(level, lesson);
          setData(data.data);
        } else {
          const data = await dataService();
          setData(data.data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [dataService, level, lesson, type]);

  useEffect(() => {
    if (!data.length) return;
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
    loading,
  };
};

export default useLetterQuiz;
