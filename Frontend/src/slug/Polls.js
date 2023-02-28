import React, { useEffect, useState } from "react";
import Start from "../components/quiz/Start";
import Quiz from "../components/quiz/Quiz";
import Result from "../components/quiz/Result";
import quizQstn from "../assets/quiz/quiz.js";
import { useNavigate } from "react-router-dom";

function Polls({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();
  useEffect(() => {
    if (!logged) {
      return navigate("/");
    }
    if (!isTicket) {
      return navigate("/scan");
    }
  }, [logged]);
  // All Quizs, Current Question, Index of Current Question, Answer, Selected Answer, Total Marks
  const [quizs, setQuizs] = useState(quizQstn);
  const [question, setQuesion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [marks, setMarks] = useState(0);

  // Display Controlling States
  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Load JSON Data
  // useEffect(() => {
  //   fetch("quiz.json")
  //     .then((res) => res.json())
  //     .then((data) => setQuizs(data));
  // }, []);

  // Set a Single Question
  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuesion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  // Start Quiz
  const startQuiz = () => {
    setShowStart(false);
    setShowQuiz(true);
  };

  // Check Answer
  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.answer);
      setSelectedAnswer(selected);

      if (selected === question.answer) {
        event.target.classList.add("bg-success");
        setMarks(marks + 5);
      } else {
        event.target.classList.add("bg-danger");
      }
    }
  };

  // Next Quesion
  const nextQuestion = () => {
    setCorrectAnswer("");
    setSelectedAnswer("");
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
    setQuestionIndex(questionIndex + 1);
  };

  // Show Result
  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  // Start Over
  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer("");
    setSelectedAnswer("");
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector("button.bg-danger");
    wrongBtn?.classList.remove("bg-danger");
    const rightBtn = document.querySelector("button.bg-success");
    rightBtn?.classList.remove("bg-success");
  };

  return (
    <div style={{ height: "80vh" }}>
      {/* Welcome Page */}
      <Start startQuiz={startQuiz} showStart={showStart} />

      {/* Quiz Page */}
      {questionIndex + 1 <= quizs.length ? (
        <Quiz
          showQuiz={showQuiz}
          question={question}
          quizs={quizs}
          checkAnswer={checkAnswer}
          correctAnswer={correctAnswer}
          setCorrectAnswer={setCorrectAnswer}
          selectedAnswer={selectedAnswer}
          questionIndex={questionIndex}
          nextQuestion={nextQuestion}
          showTheResult={showTheResult}
          setMarks={setMarks}
        />
      ) : (
        <Result
          showResult={showResult}
          quizs={quizs}
          marks={marks}
          startOver={startOver}
        />
      )}
    </div>
  );
}

export default Polls;
