import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const useQuiz = (questionData, optionKey, limit) => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  useMemo(() => {
    if (!questionData) return;
    const shuffledArray = limit
      ? questionData.sort(() => 0.5 - Math.random()).splice(0, limit)
      : questionData.sort(() => 0.5 - Math.random());
    let typeBasedOptions = null;
    if (Object.keys(questionData[0]).includes("type")) {
      typeBasedOptions = questionData.reduce(
        // eslint-disable-next-line
        (p, c) => (p[c.type] ? p[c.type].push(c) : (p[c.type] = [c]), p),
        {}
      );
    }
    setQuestions(
      shuffledArray?.map((data) => {
        const optionData =
          typeBasedOptions && typeBasedOptions[data.type].length > 3
            ? typeBasedOptions[data.type]
            : questionData;
        const options =
          typeBasedOptions && typeBasedOptions[data.type].length <= 4
            ? typeBasedOptions[data.type]?.map((data) => data[optionKey])
            : [data[optionKey]];
        let option = data[optionKey];
        while (options.length < 4) {
          while (options.includes(option)) {
            option =
              optionData[Math.floor(Math.random() * optionData.length)][
                optionKey
              ];
          }
          options.push(option);
        }
        data.options = options.sort((a, b) => 0.5 - Math.random());
        return data;
      })
    );
  }, [questionData, optionKey, limit]);

  const handleAnswer = (answer) => {
    if (answers.length !== questionIndex) return;
    if (answers.length === questionIndex) {
      setCurrentAnswer(answer);
      setAnswers([...answers, answer]);
    }
  };

  const goNext = () => {
    if (answers.length === questionIndex) {
      setAnswers([...answers, null]);
    }
    setQuestionIndex((prev) => prev + 1);
    if (currentAnswer === questions[questionIndex][optionKey])
      setTotalCorrect((prev) => prev + 1);
    setCurrentAnswer(null);
  };

  const handleReset = () => navigate(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "a") {
        handleAnswer(questions[questionIndex].options[0]);
      } else if (event.key === "b") {
        handleAnswer(questions[questionIndex].options[1]);
      } else if (event.key === "c") {
        handleAnswer(questions[questionIndex].options[2]);
      } else if (event.key === "d") {
        handleAnswer(questions[questionIndex].options[3]);
      }

      // For "Next" on Enter
      if (event.key === "Enter") {
        goNext();
      }
    };

    window.addEventListener("keypress", handleKeyPress);

    return () => {
      window.removeEventListener("keypress", handleKeyPress);
    };
    // eslint-disable-next-line
  }, [questions, questionIndex, currentAnswer]);
  return {
    questions,
    questionIndex,
    handleAnswer,
    goNext,
    handleReset,
    currentAnswer,
    totalCorrect,
  };
};

export default useQuiz;
