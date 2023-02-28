import React from "react";
import M1 from "../assets/img/1.gif"
import M2 from "../assets/img/2.gif"

export default function Slogans() {
  return (
    <div>
      <div className="slogan">
        <div className="heading">East or West INDIA is Best</div>
        <img src={M1} alt="Loading..." />
      </div>
      <div className="slogan">
        <div className="heading">Waka Waka Boo Boo</div>
        <img src={M2} alt="Loading..." />
      </div>
    </div>
  );
}
