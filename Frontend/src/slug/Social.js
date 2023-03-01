import { Box } from "@mui/material";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import PageHead from "../components/PageHead";
import P1 from "../assets/img/ud1.png"
import P2 from "../assets/img/ud2.png"
import P3 from "../assets/img/ud3.png"
import P4 from "../assets/img/ud4.png"
import P5 from "../assets/img/ud5.jpeg"
import CheerComp from "../components/CheerComp";

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
    <Box>
      <PageHead title="Social Endorsements" />
      <div style={{ maxWidth: "100%", width: "500px", margin: "auto", background: "white" }}>
        <p style={{ margin: "10px 20px", lineHeight: "2", textAlign: "center" }}>
          Get starred ⭐ on stadium screen. <br /> Post yourself with #icc2023 and
          #zor_se_bol
        </p>
        <h2
          style={{ maxWidth: "80%", width: "fit-content", margin: "20px auto" }}
        >
          Our highlights
        </h2>
        <Box
          display="flex"
          flexDirection="column"
          backgroundColor="white"
        >
          {imgList.map((item, i) => (
            <CheerComp
              key={i}
              title={item.title}
              imgSrc={item.src}
              height = "280px"
            />
          ))}
        </Box>
      </div>
    </Box>
  );
}
