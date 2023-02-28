import React from "react";
import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";

import "../assets/css/engage.css";
import M1 from "../assets/img/M1.gif";
import M2 from "../assets/img/M2.gif";
import M3 from "../assets/img/M3.gif";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Engage({ logged, isTicket, setIsTicket }) {
  let navigate = useNavigate();

  useEffect(() => {
    if (logged) {
      return navigate("/");
    }
    if (isTicket) {
      return navigate("/scan");
    }
  }, [logged]);
  return (
    <Box>
      <PageHead title="Engage Fan Movements" />
      <Box backgroundColor="#FAFAFA">
        <div className="left">
          <Link to="/modal">
            <div className="modal">
              <div className="heading">MODALS</div>
              <img src={M1} alt="Loading..." />
            </div>
          </Link>
          <div className="chant">
            <div className="heading">CHANTS</div>
            <img src={M2} alt="Loading..." />
          </div>
        </div>
        <div className="righ">
          <div className="modal">
            <div className="heading">SLOGANS</div>
            <img src={M3} alt="Loading..." />
          </div>
          <div className="chant">
            <div className="heading">CHEERS</div>
            <img src={M1} alt="Loading..." />
          </div>
        </div>
      </Box>
    </Box>
  );
}
