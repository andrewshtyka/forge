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

export default function IconCheckout({ size = 16, color = "black" }) {
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
        d="M16 10.0831L14.474 11.5104L16 12.9378V16H11.2738L8.00102 12.9387L4.7282 16H0V12.9435L1.53209 11.5104L0 10.0774V0H16V10.0831ZM3.2002 9.49668H12.8008V8.00048H3.2002V9.49668ZM3.2002 6.50332H12.8008V5.00711H3.2002V6.50332ZM3.2002 3.50996H12.8008V2.01375H3.2002V3.50996Z"
      />
    </svg>
  );
}
