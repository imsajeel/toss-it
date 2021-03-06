import React from "react";
import HeadsImage from "./Heads-2.png";
import TailsImage from "./Heads-3.png";

const Logic = (onLogic) => {
  let result = 1;

  let coin;
  if (result === 1) {
    coin = <img src={HeadsImage} alt={"Heads"} />;
  } else if (result === 2) {
    coin = <img src={TailsImage} alt={"Heads"} />;
  } else {
    coin = <h1>NOT FOUND!</h1>;
  }

  return (
    <div>
      {console.log(onLogic.onLogic)}
      {coin}
      <div>
        <button id="btRetry" className="btRed">
          Retry
        </button>
      </div>
    </div>
  );
};

export default Logic;
