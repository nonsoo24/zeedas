import React from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const RadialProgressBar = ({ percentage, text = "", color }) => (
  <div style={{ width: "24px" }}>
    <CircularProgressbar
      value={percentage}
      text={text}
      styles={buildStyles({
        pathColor: color,
        pathTransitionDuration: 0.5,
        circleRatio: 0,
      })}
    />
  </div>
);

export default RadialProgressBar;
