import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import Option from "./Option";

const Quiz = ({
  showQuiz,
  question,
  quizs,
  checkAnswer,
  correctAnswer,
  setMarks,
  selectedAnswer,
  questionIndex,
  nextQuestion,
  showTheResult,
}) => {
  const [votes, setVotes] = useState([
    {
      id: "",
      votes: "",
    },
  ]);

  const [clicked, setClicked] = useState(false);
  let [selectedOption, setSelectedOption] = useState(null);

  function handleOptionSelect(id, selected, ans) {
    Array.from(document.querySelectorAll(".option")).map(
      (item) => (item.style.backgroundColor = "white")
    );
    Array.from(document.querySelectorAll(".option"))[id].style.backgroundColor =
      "yellow";
    setSelectedOption(id);
  }
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    let int_id;
    if (timer > 0) {
      int_id = setInterval(() => {
        setTimer(() => timer - 1);
      }, 1000);
    } else if (timer == 0) {
      // console.log(question.options[selectedOption], question.answer);
      if (question.options[selectedOption] == question.answer) {
        Array.from(document.querySelectorAll(".option"))[
          selectedOption
        ].style.backgroundColor = "Green";
        setMarks((prev) => prev + 5);
      } else {
        if (selectedOption)
          Array.from(document.querySelectorAll(".option"))[
            selectedOption
          ].style.backgroundColor = "red";
      }
      setTimeout(() => {
        nextQuestion();
        // if (selectedOption)
        Array.from(document.querySelectorAll(".option")).map(
          (item) => (item.style.backgroundColor = "white")
        );
        setSelectedOption(null);
        setTimer(10);
      }, 1000);
    }
    return () => clearInterval(int_id);
  }, [timer]);

  return (
    <section
      className="bg-dark text-white"
      style={{ display: `${showQuiz ? "block" : "none"}` }}
    >
      <div className="container">
        <div className="row vh-100 align-items-center justify-content-center">
          <div
            className="timer"
            style={{ margin: " 10px 0 10px 0", textAlign: "right" }}
          >
            Answer in {timer} sec
          </div>
          <div className="col-lg-8">
            <div className="card p-4" style={{}}>
              <div className="d-flex justify-content-between gap-md-3">
                <h5
                  className="mb-2 fs-normal lh-base"
                  style={{
                    width: "",
                    textAlign: "center",
                    fontSize: "21px",
                    marginLeft: "5%",
                  }}
                >
                  {question?.question}
                </h5>
                {/* <h5
                  style={{
                    color: "#60d600",
                    width: "100px",
                    textAlign: "right",
                  }}
                >
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5> */}
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <div
                    className="option"
                    key={index}
                    onClick={() =>
                      handleOptionSelect(index, item, question.answer)
                    }
                  >
                    {item}
                  </div>
                ))}
              </div>

              {console.log(questionIndex, quizs.length, "end")}
              {questionIndex + 1 < quizs.length ? (
                <button
                  className="btn_t py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={nextQuestion}
                  disabled={!selectedAnswer}
                >
                  Next Question
                </button>
              ) : (
                <button
                  className="btn_t py-2 w-100 mt-3 bg-primary text-light fw-bold"
                  onClick={showTheResult}
                  disabled={!selectedAnswer}
                >
                  Show Result
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
