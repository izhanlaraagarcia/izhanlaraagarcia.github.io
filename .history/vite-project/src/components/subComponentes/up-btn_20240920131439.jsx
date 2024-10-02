import React from "react";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

export default function UpBtn() {
//   Btn to up
return (
    <div className="up-btn" style={{top: "100vh", alignItems: "left"}}>
        <a href="/">
            <i className="up-btn"></i>
        </a>
    </div>
);
}
