import React from "react";
import { ScrollToTop } from "react-scroll/modules/mixins/animate-scroll";

export default function UpBtn() {
  return (
    <div className="up-btn" id="up-scroll-btn">
      <ScrollToTop smooth color="black" />
      <p style={{ marginTop: "150vh" }}></p>
    </div>
  );
}
