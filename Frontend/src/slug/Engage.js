import React from "react";
import M1 from "../assets/img/M1.gif";
import M2 from "../assets/img/M2.gif";
import M3 from "../assets/img/M3.gif";
import { Link } from "react-router-dom";
import "../assets/css/engage.css"

export default function Engage() {
  return (
    <div className="container">
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
    </div>
  );
}
