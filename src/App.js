import React, { Component } from "react";
import TossIT from "./component/TossIT/TossIT";
import Logic from "./component/Logic/Logic";
import Splash from "./component/Splash/Splash";
import Wrong from "./component/Wrong/Wrong";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      screen: "toss",
      result: 0,
    };
  }

  onScreenSplash = () => {
    this.setState({ screen: "splash" });
  };

  onScreenToss = () => {
    this.setState({ screen: "toss" });
  };
  onScreenLogic = () => {
    this.setState({ screen: "logic" });
  };

  render() {
    const { screen } = this.state;

    let screenState;

    if (screen === "splash") {
      screenState = <Splash />;
    } else if (screen === "toss") {
      screenState = <TossIT onClickToss={this.onScreenLogic} />;
    } else if (screen === "logic") {
      screenState = <Logic onLogic={this.onScreenToss} />;
    } else {
      screenState = <Wrong />;
    }

    return (
      <div className="App">
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,900&display=swap"
          rel="stylesheet"
        />
        {screenState}
      </div>
    );
  }
}
export default App;
