import React from "react";
import M1 from "../assets/M1.gif";
import "./fun.css";

export default function Fun() {
  return (
    <div className="container">
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
    </div>
  );
}
