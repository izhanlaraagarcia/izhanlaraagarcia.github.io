import React from "react";
import { ScrollToTop } from "react-scroll/modules/mixins/animate-scroll";

export default function UpBtn() {
//   Btn to up
return (
    <div className="up-btn" id="up-scroll-btn">
    <ScrollToTop smooth color="#6f00ff" />
    <p style={{ marginTop: "150vh" }}>bottom</p>
  </div>
);
}
