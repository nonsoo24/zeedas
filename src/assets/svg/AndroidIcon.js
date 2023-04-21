import * as React from "react";

const AndroidIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={32}
    height={20}
    fill="none"
    {...props}
  >
    <mask
      id="b"
      width={32}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="url(#a)" d="M.364 0h30.769v20H.364z" />
    </mask>
    <g mask="url(#b)">
      <path fill="#fff" d="M-1.867 1h35v20h-35z" />
    </g>
    <defs>
      <pattern id="a" width={1} height={1} patternContentUnits="objectBoundingBox">
        <use xlinkHref="#c" transform="matrix(.00104 0 0 .0016 0 -.23)" />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="c"
        width={960}
        height={960}
      />
    </defs>
  </svg>
);
export default AndroidIcon;