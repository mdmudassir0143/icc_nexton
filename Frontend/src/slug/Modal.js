import React from "react";
import M1 from "../assets/1.gif"
import M2 from "../assets/2.gif"

export default function Modal() {
  return (
    <div>
      <div className="modal">
        <div className="heading">Lets gooooo</div>
        <img src={M2} alt="Loading..." />
      </div>
      <div className="modal">
        <div className="heading">Waka Waka Boo Boo</div>
        <img src={M1} alt="Loading..." />
      </div>
    </div>
  );
}