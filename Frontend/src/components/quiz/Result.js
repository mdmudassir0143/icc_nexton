import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Result = ({ showResult, quizs, marks, startOver }) => {
  return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap="1rem"
      >
        <Typography
          textAlign="center"
          variant="h6"
          fontWeight="bold"
        >
          {/* Scores Out */}
          Wait for the Results... <br /> Rewards will be added after results.
        </Typography>
        {/* <Typography
          textAlign="center"
          variant="h6"
          color={marks > (quizs.length * 5) / 2 ? "success" : "error"}
        >
          {marks > (quizs.length * 5) / 2 ? "Awesome!" : "Oops!"}, Your score is {marks} out of {quizs.length * 5}
        </Typography> */}
        <Button
          onClick={startOver}
          variant="contained"
          color="success"
        >
          Start Over
        </Button>
      </Box>
  );
};

export default Result;
