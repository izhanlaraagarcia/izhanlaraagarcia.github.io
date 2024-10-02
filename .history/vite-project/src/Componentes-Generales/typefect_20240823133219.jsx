// src/Home/Typewriter.jsx

import React, { useState, useEffect } from "react";
import "./styles/typewriter.scss";

const Typewriter = ({ texts, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);

  useEffect(() => {
    if (index < texts.length) {
      if (subIndex === texts[index].length + 1 && forward) {
        setTimeout(() => setForward(false), pause);
      } else if (subIndex === 0 && !forward) {
        setForward(true);
        setIndex((prev) => (prev + 1) % texts.length);
      } else {
        const timeout = setTimeout(() => {
          setSubIndex((prev) => prev + (forward ? 1 : -1));
        }, speed);

        return () => clearTimeout(timeout);
      }
    }
  }, [subIndex, index, forward, texts, speed, pause]);

  useEffect(() => {
    setDisplayedText(texts[index].substring(0, subIndex));
  }, [subIndex, index, texts]);

  return <h1 className="typewriter-text">{displayedText}</h1>;
};

export default Typewriter;
