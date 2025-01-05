"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height="120"
      width="120"
      ariaLabel="Common Loader"
      borderColor="#000" // Set the border color
      barColor="#fff" // Set the bar color
      wrapperStyle={{ display: "block", margin: "auto" }}
    />
  );
}
