import "../assets/css/home.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";

import Caurosal from "../components/Caurosal";

export default function Home() {
  const navigate = useNavigate()
  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="5px 20px 20px 20px"
    >

      <Typography
        variant="h5"
        textAlign="center"
        p="10px"
        mb="10px"
      >
        Welcome to ICC neXton
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        className="float_scan_ticket"
        onClick={() => navigate("/scan")}
        style={{
          width: "100%",
          borderRadius: "1rem",
          marginBottom: "20px",
        }}
      >
        <IconButton
          color="secondary"
        >
          <QrCodeScannerIcon style={{ fontSize: "40px" }} />
        </IconButton>
        Scan Ticket to enter neXton
      </Button>

      <Caurosal />

      <Typography
        variant="h6"
        m="10px 0px"
      >
        Stadium interactions
      </Typography>
      <Box
        display="flex"
        width="100%"
        justifyContent="space-between"
        gap="10px"
      >
        <Button
          variant="contained"
          width="40%"
          m="25px"
          onClick={() => navigate("/engage")}
        >
          Engage Fan movement
        </Button>

        <Button
          variant="contained"
          width="40%"
          onClick={() => navigate("/fun")}
        >
          Fun Activities
        </Button>
      </Box>

      <Typography
        variant="h6"
        m="10px 0px"
      >
        Earn Rewards
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        gap="10px"
      >
        <Button
          variant="contained"
          onClick={() => navigate("")}
        >
          Dispose and Earn
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("")}
        >
          Participate in Live Polls
        </Button>
        <Button
          variant="contained"
          onClick={() => navigate("")}
        >
          Share your social media engagement
        </Button>
      </Box>

      <Typography
        variant="h6"
        m="10px 0px"
      >
        Explore More
      </Typography>
      <Box>
        <Box
          display="flex"
          flexDirection="column"
          gap="10px"
        >
          <Button
            variant="contained"
            onClick={() => navigate("")}
          >
            Buy Tickets
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("")}
          >
            Game Schedule
          </Button>
          <Button
            variant="contained"
            onClick={() => navigate("")}
          >
            Check Official Merchandise
          </Button>
        </Box>
      </Box>
    </Box>
  );
}