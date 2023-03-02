import "../assets/css/home.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Box, IconButton } from "@mui/material";
import { useEffect } from "react";
import Caurosal from "../components/Caurosal";

import team1 from "../assets/img/team1.jpg";
import team2 from "../assets/img/team2.jpg";
import team3 from "../assets/img/team3.jpg";
import team4 from "../assets/img/team4.jpg";
import team5 from "../assets/img/team5.jpg";

export default function Home({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      return navigate("/");
    }
  }, [logged]);

  const imgList = [team1, team2, team3, team4, team5];

  return (
    <Box
      display="flex"
      flexDirection="column"
      padding="1rem 1rem 3rem 1rem"
      gap="1rem"
    >
      <Typography variant="h5" textAlign="center" p="10px">
        Welcome to ICC neXton
      </Typography>

      <Button
        variant="outlined"
        color="secondary"
        className="float_scan_ticket"
        onClick={() => navigate("/scan")}
        style={{
          width: "100%",
          borderRadius: "3rem",
          marginBottom: "20px",
        }}
      >
        <IconButton color="secondary">
          <QrCodeScannerIcon style={{ fontSize: "40px" }} />
        </IconButton>
        Scan Ticket to enter neXton
      </Button>
      <Box minHeight="240px">
        <Caurosal imgList={imgList} />
      </Box>

      <Box display="flex" flexDirection="column" gap="10px">
        <Typography variant="h6" m="5px 0">
          Earn Rewards
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/rewards/dispose")}
        >
          Dispose and Earn
        </Button>
        <Button variant="contained" onClick={() => navigate("/rewards/polls")}>
          Participate in Live Polls
        </Button>
        <Button variant="contained" onClick={() => navigate("/rewards/social")}>
          Share your social media engagement
        </Button>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
        gap="10px"
      >
        <Typography variant="h6" m="5px 0">
          Stadium Interactions
        </Typography>
        <Button
          variant="contained"
          width="40%"
          m="25px"
          onClick={() => navigate("/interactions/fan-movements")}
        >
          Engage Fan movement
        </Button>

        <Button
          variant="contained"
          width="40%"
          onClick={() => navigate("/interactions/fun-activities")}
        >
          Fun Activities
        </Button>
      </Box>

      <Box display="flex" flexDirection="column" gap="10px">
        <Typography variant="h6" m="5px 0">
          Explore More
        </Typography>
        <Button variant="contained" onClick={() => navigate("")}>
          Game Schedule
        </Button>
        <Button variant="contained" onClick={() => navigate("")}>
          Buy Tickets
        </Button>
        <Button variant="contained" onClick={() => navigate("")}>
          Check Official Merchandise
        </Button>
      </Box>
    </Box>
  );
}
