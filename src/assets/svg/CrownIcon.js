import * as React from "react";

const CrownIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40} fill="none" {...props}>
    <circle cx={20} cy={20} r={20} fill="#229BE0" fillOpacity={0.2} />
    <path
      fill="#229BE0"
      d="m31.19 16.358-3.468 10.625a.75.75 0 0 1-1.098.411C26.603 27.381 24.206 26 19.998 26c-4.207 0-6.605 1.381-6.628 1.395a.75.75 0 0 1-1.095-.412L8.808 16.355a1.135 1.135 0 0 1 1.585-1.37l4.705 2.343 3.93-6.53a1.134 1.134 0 0 1 1.944 0l3.93 6.53 4.707-2.344a1.134 1.134 0 0 1 1.582 1.375v-.001Z"
    />
  </svg>
);
export default CrownIcon;
