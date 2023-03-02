import React from "react";
import { Typography, Button, Box, IconButton } from "@mui/material";
import PageHead from "../components/PageHead";
import { useNavigate } from "react-router-dom";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";

function DisposeYourself() {
  let navigate = useNavigate();
  return (
    <>
      <PageHead title="Dispose Yourself" />
      <Box>
        <Typography
          p="0.5rem 1.5rem"
          variant="h5"
          color="#565864"
          textAlign="center"
        >
          Dispose and Scan Dustbin QR
        </Typography>
        <Button
          variant="outlined"
          color="secondary"
          className="float_scan_ticket"
          onClick={() => navigate("/dustbincamera")}
          style={{
            align: "center",
            width: "70%",
            borderRadius: "3rem",
            margin: "50px",
          }}
        >
          <IconButton color="secondary">
            <QrCodeScannerIcon style={{ fontSize: "40px" }} />
          </IconButton>
          Scan The Dustbin QR
        </Button>
      </Box>
    </>
  );
}

export default DisposeYourself;
