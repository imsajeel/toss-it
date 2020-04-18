import React from "react";
import TossITimage from "./Heads-1.png";
import "./TossIT.css";

const TossIT = (onClickToss) => {
  return (
    <div className="TossIT">
      <img src={TossITimage}></img>
      <button onClick={onClickToss.onClickToss} className="btRed">
        Toss !
      </button>
    </div>
  );
};

export default TossIT;
