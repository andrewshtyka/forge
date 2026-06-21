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

export default function IconShaft({ size = 16, color = "black" }) {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C10.9455 0 13.3333 2.28945 13.3333 5.11364V13.2727H16V16H10.2086L7.9995 13.7407L5.79036 16H0V13.2727H2.66667V5.11364C2.66667 2.28945 5.05448 0 8 0ZM10.6667 5.45455C10.6667 6.96078 9.47276 8.18182 8 8.18182C6.52724 8.18182 5.33333 6.96078 5.33333 5.45455C5.33333 3.94831 6.52724 2.72727 8 2.72727C9.47276 2.72727 10.6667 3.94831 10.6667 5.45455Z"
      />
    </svg>
  );
}
