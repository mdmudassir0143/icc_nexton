import React from "react";
import PageHead from "../components/PageHead";

import M1 from "../assets/img/M1.gif";
import "./fun.css";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Fun({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      return navigate("/");
    }
    if (!isTicket) {
      return navigate("/scan");
    }
  }, [logged]);
  return (
    <Box>
      <PageHead title="Fun Activities" />
      <Box backgroundColor="#FAFAFA">
        <div className="g1">
          <div className="heading">EVOLVE YOUR PLAYER</div>
          <img src={M1} alt="Loading..." />
        </div>
        <div className="g2">
          <div className="heading">CLAIM YOUR NFT</div>
          <img src={M1} alt="Loading..." />
        </div>
        <div className="g3">
          <div className="heading">WHITELIST YOUR ADDRESS</div>
          <img src={M1} alt="Loading..." />
        </div>
      </Box>
    </Box>
  );
}
