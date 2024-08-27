import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useQuiz = (questionService, level, lesson, limit) => {
  const navigate = useNavigate();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState(null);
  const [totalCorrect, setTotalCorrect] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      if (!questionService) return;
      const getData = async () => {
        if (level) {
          if (limit) {
            const questions = await questionService(level, limit);
            setQuestions(questions.data);
          } else if (lesson) {
            const questions = await questionService(level, lesson);
            setQuestions(questions.data);
          } else {
            const questions = await questionService(level);
            setQuestions(questions.data);
          }
        } else if (limit) {
          const questions = await questionService(limit);
          setQuestions(questions.data);
        } else {
          const questions = await questionService();
          setQuestions(questions.data);
        }
        setLoading(false);
      };
      getData();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [questionService, level, lesson, limit]);

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
    if (currentAnswer === questions[questionIndex].answer)
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
    loading,
  };
};

export default useQuiz;
