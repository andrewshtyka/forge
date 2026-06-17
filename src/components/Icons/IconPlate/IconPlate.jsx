"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function IconPlate({ size = 16, color = "black" }) {
  let appliedColor;

  if (color === "white") {
    appliedColor = "var(--color-bg-primary)";
  } else if (color === "black") {
    appliedColor = "var(--color-bg-secondary)";
  } else if (color === "blue") {
    appliedColor = "var(--color-bg-accent)";
  } else return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={appliedColor}
        d="M16 6.02831C15.2133 2.9285 12.6141 0.534777 9.37425 0V2.66667H12.1226V13.3333H9.37425V16C12.6141 15.4652 15.2133 13.0715 16 9.97169L13.9679 8L16 6.02831Z"
      />
      <path
        d="M3.34309e-06 6.0287C0.786596 2.92871 3.38585 0.534799 6.62585 0V2.66667H3.87746V13.3333H6.62585V16C3.38585 15.4652 0.786589 13.0713 0 9.97128L2.03171 7.99999L3.34309e-06 6.0287Z"
        fill="#090A0A"
      />
    </svg>
  );
}
