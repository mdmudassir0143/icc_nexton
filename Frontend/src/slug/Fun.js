import React from "react";
import PageHead from "../components/PageHead";
import M1 from "../assets/img/M1.gif";
import wteam from "../assets/img/wteam.png";
import nftdrop from "../assets/img/nftdrop.png";
import "../assets/css/fun.css";

import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Fun({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (!logged) {
      return navigate("/");
    }
    // if (!isTicket) {
    //   return navigate("/scan");
    // }
  }, [logged]);
  return (
    <Box>
      <PageHead title="Fun Activities" />
      <Box backgroundColor="#FAFAFA">
        <div className="g1">
          <div className="heading">EVOLVE YOUR PLAYER</div>
          <a href="https://whitelist-dapp-delta-five.vercel.app/" target={"_blank"}><img src={wteam} alt="Loading..." /></a>
        </div>
        <div className="g2">
          <div className="heading">CLAIM YOUR NFT</div>
          <a href="https://icc-drop.vercel.app/" target={"_blank"}><img src={nftdrop} alt="Loading..." /></a>
        </div>
        <div className="g3">
          <div className="heading">WHITELIST YOUR ADDRESS</div>
          <a href="https://whitelist-dapp-delta-five.vercel.app/" target={"_blank"}><img src={wteam} alt="Loading..." /></a>
        </div>
      </Box>
    </Box>
  );
}
