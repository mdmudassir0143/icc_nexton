import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import PageHead from "../components/PageHead";

import { Button, IconButton, Typography, Box, } from "@mui/material";
import CheerComp from "../components/CheerComp";

function App(props) {
  const navigate = useNavigate();

  const [dataUri, setDataUri] = useState('');

  function handleTakePhoto(dataUri) {
    console.log('takePhoto');
    setDataUri(dataUri);
  }

  return (
    <Box>
      <PageHead title="Scan Spillage" />
      <Box
        minHeight="70vh"
      >
        <Typography
          marginTop="1rem"
          padding="5px"
          variant="h6"
          textAlign="center"
        >
          Open Camera to Scan
        </Typography>

        <Box
          // width="90%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          padding="auto"
        >
          {(dataUri)
            ?
            <CheerComp
              // title="Trash Image"
              imgSrc={dataUri}
            />
            :
            <Camera
              onTakePhoto={handleTakePhoto}
              imageCompression={0.9}
              onCameraStop={() => {}}
            />
          }
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
        {dataUri && 
          <Button
            variant="contained"
            style={{
              width: "40%",
              borderRadius: "2rem",
              marginTop: "10px",
              fontSize: 20,
              border: "1px solid black",
            }}
            color="success"
            onClick={() => {
              window.alert("Submitted Successfully")
              navigate(-1)
            }}
          >
            Submit
          </Button>
        }
        </Box>
      </Box>
    </Box>
  );
}

export default App;
