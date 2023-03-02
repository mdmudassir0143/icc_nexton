import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHead from "../components/PageHead";
import Caurosal from "../components/Caurosal";
import Camera from "./Camera";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import { IconButton, Typography } from "@mui/material";
import { Block, ExpandLess, ExpandMore } from "@mui/icons-material";
import { Box } from "@mui/system";

import disposeImg1 from "../assets/img/dispose1.png";
import disposeImg3 from "../assets/img/dispose3.png";
import rewardImg1 from "../assets/img/rewards1.png";
import rewardImg2 from "../assets/img/rewards2.png";
import garbage from "../assets/img/garbage.png";

function Dispose() {
  let navigate = useNavigate();
  //   const imgList = [garbage];

  const [openYS, setOpenYS] = useState(false);
  const [openCS, setOpenCS] = useState(false);

  const handleClickYS = () => {
    openCS && setOpenCS(!openCS);
    setOpenYS(!openYS);
  };

  const handleClickCS = () => {
    openYS && setOpenYS(!openYS);
    setOpenCS(!openCS);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      minheight="100vh"
    >
      <PageHead title="Dispose and Earn" />
      <Box
        height="10rem"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        marginTop="-2rem"
        backgroundColor="#6CA6E5"
        minHeight="50vh"
        zIndex="-1"
      >
        <img
          src={rewardImg2}
          alt="garbage"
          // height="80%"
          width="80%"
          style={{
            aspectRatio: "1/1",
          }}
        />
      </Box>
      <Box
        position="relative"
        marginTop="-4.5rem"
        borderRadius="3rem 3rem 0 0"
        backgroundColor="#dddddd"
        zIndex="10"
        height="90%"
      >
        <Typography
          p="0.5rem 1.5rem"
          variant="h5"
          // fontWeight="bold"
          color="#565864"
          textAlign="center"
        >
          Dispose Trash and Earn Rewards
        </Typography>
        <Box
          minHeight="12rem"
          height="100%"
          padding="1rem 2rem"
          backgroundColor="white"
          borderRadius="3rem 3rem 0 0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            textAlign="justify"
          >
            Keep the venue clean and tidy by disposing the trash in the bins provided. You can deposit the trash yourself or call the staff for cleaning.
          </Typography>
          <Box 
            marginTop=".5rem" 
            width="100%"
          >
            <List
              sx={{
                width: "100%",
                gap: "1rem",
              }}
              component="nav"
            >
              <ListItemButton 
                onClick={handleClickYS}
                sx={{
                  borderBottom: "1px solid #565864",
                }}
              >
                <ListItemText
                  primary="Deposit Trash Yourself"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                />
                {openYS ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openYS} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/disposeyourself")}
                    style={{
                      // display: "flex",
                      // flexDirection: "column",
                      backgroundColor: "#ffb6c170",
                      borderRadius: "0 0 3rem 3rem",
                      gap: "1rem",
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    // backgroundColor="#ffb6c170"
                    // borderRadius="0 0 3rem 3rem"
                    >
                      <img src={disposeImg1} alt="disposeImg1" width="80%" />
                      {/* <Typography variant="h6" textAlign="center">
                        Deposit Your Trash
                      </Typography> */}
                    </Box>
                    <Box>
                      <Typography>
                        Deposit the trash in the bins provided and scan the QR code on the bin to earn rewards.
                      </Typography>
                    </Box>
                  </ListItemButton>
                </List>
              </Collapse>
              <ListItemButton 
                onClick={handleClickCS}
                sx={{
                  borderBottom: "1px solid #565864",
                }}
              >
                <ListItemText primary="Call Staff for Cleaning" />
                {openCS ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openCS} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  <ListItemButton
                    onClick={() => navigate("/camera")}
                    style={{
                      display: "flex",
                      // flexDirection: "column",
                      backgroundColor: "#ffb6c170",
                      borderRadius: "0 0 3rem 3rem",
                    }}
                  >
                    <Box
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                    // backgroundColor="#ffb6c170"
                    // borderRadius="0 0 3rem 3rem"
                    >
                      <img src={disposeImg3} alt="disposeImg1" width="80%" />
                      {/* <Typography variant="h6" textAlign="center">
                        Call Staff
                      </Typography> */}
                    </Box>
                    <Box>
                      <Typography>
                        Upload a photo of the location and the trash to call the staff member.
                      </Typography>
                    </Box>
                  </ListItemButton>
                </List>
              </Collapse>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Dispose;
