import React from "react";
import { Link } from "react-router-dom";
import PageHead from "../components/PageHead";

import "../assets/css/engage.css";
import M1 from "../assets/img/M1.gif";
import M2 from "../assets/img/cheers.gif";
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
          <Link to="/interactions/modal">
            <div className="modal">
              <div className="heading">MODALS</div>
              <img src={M3} alt="Loading..." />
            </div>
          </Link>
        </div>
        <div className="righ">
          <Link to="/interactions/cheers">
            <div className="chant">
              <div className="heading">CHEERS</div>
              <img src={M2} alt="Loading..." />
            </div>
          </Link>
        </div>
      </Box>
    </Box>
  );
}
