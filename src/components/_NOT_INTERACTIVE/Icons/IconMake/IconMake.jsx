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

export default function IconMake({ size = 16, color = "black" }) {
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
        d="M11.2003 3.07031H12.8005L14.3998 12.7674H16V16H11.1325L7.99914 12.8351L4.86583 16H0V12.7674H1.60017L3.20034 3.07031H4.79966L8 0L11.2003 3.07031ZM8.00086 4.68663C6.67537 4.68663 5.60061 5.77225 5.6006 7.11111C5.6006 8.44998 6.67536 9.53559 8.00086 9.53559C9.32629 9.53552 10.4011 8.44994 10.4011 7.11111C10.4011 5.77229 9.32629 4.6867 8.00086 4.68663Z"
      />
    </svg>
  );
}
