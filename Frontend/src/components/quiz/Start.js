import React from "react";
import PageHead from '../PageHead'
import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";

const Start = ({ startQuiz, showStart }) => {
  return (
      <Box
        display={showStart ? "flex" : "none"}
        justifyContent="center"
        alignItems="center"
        paddingTop="1rem"
      >
        <Button
          variant="contained"
          type="submit"
          onClick={startQuiz}
        >
          Start Trivia
        </Button>
      </Box>
  );
};

export default Start;
