import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import {
  Box,
  Typography,
} from "@mui/material";

import CheerComp from "../components/CheerComp";
import PageHead from "../components/PageHead";

import P1 from "../assets/img/ud1.png"
import P2 from "../assets/img/ud2.png"
import P3 from "../assets/img/ud3.png"
import P4 from "../assets/img/ud4.png"
import P5 from "../assets/img/ud5.jpeg"

import socialImg from "../assets/img/social.png";

export default function Social({ isTicket, setIsTicket }) {
  const imgList = [
    {
      src: P1,
    },
    {
      src: P2,
    },
    {
      src: P3,
    },
    {
      src: P4,
    },
    {
      src: P5,
    }
  ];
  return (
    <Box
      display="flex"
      flexDirection="column"
      minheight="100vh"
    >
      <PageHead title="Social Endorsements" />

      <Box
        // height="7rem"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        marginTop="-1.2rem"
        backgroundColor="#6CA6E5"
        minHeight="50vh"
        zIndex="-1"
      >
        <img
          src={socialImg}
          alt="socialImg"
          // height="80%"
          width="75%"
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
          p="0.5rem 3rem"
          variant="h5"
          // fontWeight="bold"
          color="#565864"
          textAlign="center"
        >
          Share your experience with the world!
        </Typography>
        <Box
          minHeight="5rem"
          // height="100%"
          padding="1rem 1rem"
          backgroundColor="white"
          borderRadius="3rem 3rem 0 0"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            textAlign="center"
          // variant="h7"
          >
            Get starred ⭐ on stadium screen.
            <br />
            Post yourself with #icc2023 and #zor_se_bol
          </Typography>
        </Box>
        <Box>
          <Box
            display="flex"
            flexDirection="column"
            backgroundColor="white"
          >
            <Typography
              textAlign="center"
              variant="h6"
              sx={{
                textDecoration: "underline",
              }}
            >
              Our Highlights
            </Typography>
            <Box
              maxHeight="60vh"
              overflow="scroll"
            >

              {imgList.map((item, i) => (
                <CheerComp
                  key={i}
                  title={item.title}
                  imgSrc={item.src}
                  height="280px"
                />
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
