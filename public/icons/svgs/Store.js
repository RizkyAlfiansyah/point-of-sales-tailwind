import * as React from "react";

const SvgStore = (props) => (
  <svg
    width={40}
    height={40}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.667 3.333H8.333c-2.756 0-5 2.244-5 5v4.719c0 1.755.637 3.35 1.667 4.576v15.705A1.667 1.667 0 0 0 6.667 35H20a1.667 1.667 0 0 0 1.667-1.667V25h6.666v8.333A1.667 1.667 0 0 0 30 35h3.334A1.667 1.667 0 0 0 35 33.333V17.627a7.09 7.09 0 0 0 1.667-4.577V8.333c0-2.756-2.244-5-5-5Zm1.666 5v4.719c0 1.9-1.414 3.52-3.151 3.611l-.182.004a3.337 3.337 0 0 1-3.333-3.334V6.667h5c.92 0 1.666.748 1.666 1.666Zm-16.666 5V6.667h6.666v6.666A3.337 3.337 0 0 1 20 16.667a3.337 3.337 0 0 1-3.333-3.334Zm-10-5c0-.918.747-1.666 1.667-1.666h5v6.666A3.337 3.337 0 0 1 10 16.667l-.181-.005c-1.737-.09-3.152-1.71-3.152-3.61V8.333Zm10 18.334H10v-5h6.667v5Z"
      fill="url(#store_svg__a)"
    />
    <defs>
      <linearGradient
        id="store_svg__a"
        x1={20}
        y1={3.333}
        x2={20}
        y2={35}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EA9769" />
        <stop offset={1} stopColor="#EA6969" />
      </linearGradient>
    </defs>
  </svg>
);

export default SvgStore;
