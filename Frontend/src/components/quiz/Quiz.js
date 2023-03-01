import { style } from "@mui/system";
import React, { useEffect, useState } from "react";
import Option from "./Option";

import { Box, Button, Typography } from "@mui/material";

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
  const [timer, setTimer] = useState(10);

  function handleOptionSelect(id, selected, ans) {
    Array.from(document.querySelectorAll(".option")).map(
      (item) => (item.style.backgroundColor = "white")
    );
    Array.from(document.querySelectorAll(".option"))[id].style.backgroundColor =
      "yellow";
    setSelectedOption(id);
  }

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
        Array.from(document.querySelectorAll(".option"))[
          selectedOption
        ].style.color = "white";
        setMarks((prev) => prev + 5);
      } else {
        if (selectedOption)
          Array.from(document.querySelectorAll(".option"))[
            selectedOption
          ].style.backgroundColor = "red";
        Array.from(document.querySelectorAll(".option"))[
          selectedOption
        ].style.color = "white";
        Array.from(document.querySelectorAll(".option"))[
          question.options.indexOf(question.answer)
        ].style.backgroundColor = "Green";
        Array.from(document.querySelectorAll(".option"))[
          question.options.indexOf(question.answer)
        ].style.color = "white";
      }
      setTimeout(() => {
        nextQuestion();
        // if (selectedOption)
        Array.from(document.querySelectorAll(".option")).map(
          (item) => (resetOptions(item)));
        setSelectedOption(null);
        setTimer(10);
      }, 1000);
    }
    return () => clearInterval(int_id);
  }, [timer]);

  const resetOptions = (item) => {
    item.style.backgroundColor = ""
    item.style.color = ""
  }

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
              <Box>
                <Typography
                  variant="h6"
                  textAlign="center"
                  fontWeight="bold"
                >
                  {question?.question}
                </Typography>
                {/* <h5
                  style={{
                    color: "#60d600",
                    width: "100px",
                    textAlign: "right",
                  }}
                >
                  {quizs.indexOf(question) + 1} / {quizs?.length}
                </h5> */}
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="1rem"
                  gap="1rem"
                >
                  {question?.options?.map((item, index) => (
                    <Button
                      variant="outlined"
                      className="option"
                      key={index}
                      onClick={() =>
                        handleOptionSelect(index, item, question.answer)
                      }
                    >
                      {item}
                    </Button>
                  ))}
                </Box>

                {console.log(questionIndex, quizs.length, "end")}
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  padding="1rem 0"
                >
                  {questionIndex + 1 < quizs.length ? (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={nextQuestion}
                      disabled={!selectedAnswer}
                    >
                      Next Question
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={showTheResult}
                      disabled={!selectedAnswer}
                    >
                      Show Result
                    </Button>
                  )}
                </Box>
              </Box>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;
