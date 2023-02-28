import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import PageHead from "../components/PageHead";
import { Button, IconButton, Typography ,Box} from "@mui/material";
function App(props) {
  function handleTakePhoto(dataUri) {
    // Do stuff with the photo...
    console.log("takePhoto");
  }

  return (
    <>
      <PageHead title="Scan Spillage" />
      <Typography
        marginTop="1rem"
        padding="5px"
        variant="h6"
        textAlign="center"
      >
        Open Camera to Scan
      </Typography>

      <Camera
        onTakePhoto={(dataUri) => {
          handleTakePhoto(dataUri);
        }}
      />
      <Button
        variant="contained"
        style={{
          width: "40%",
          borderRadius: "2rem",
          marginTop: "10px",
          fontSize: 20,
          border: "1px solid black",
        }}
      >
        Submit
      </Button>
    </>
  );
}

export default App;
