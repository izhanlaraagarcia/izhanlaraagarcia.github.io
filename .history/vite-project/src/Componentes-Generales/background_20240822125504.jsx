import React from "react";
import "./styles/background.scss";

class Background extends React.Component {
  render() {
    return (
      <div class="relative w-screen h-screen">
  <div class="bouncy-balloon w-full h-full bg-black bg-white-grad-1 overflow-hidden"></div>
</div>
    );
  }
}

export default Background;
