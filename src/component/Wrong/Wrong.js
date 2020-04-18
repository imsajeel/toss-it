import React from "react";
import sadIcon from "./sad.png";

const Wrong = () => {
  return (
    <div>
      <img src={sadIcon} alt="wrong!" />
      <h3>Somthing went wrong!</h3>
      <button className="btRed">Retry</button>
    </div>
  );
};

export default Wrong;
