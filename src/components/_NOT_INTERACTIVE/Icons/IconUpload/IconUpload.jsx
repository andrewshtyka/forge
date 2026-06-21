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

export default function IconUpload({ size = 16, color = "black" }) {
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
        d="M8.00043 0C12.4187 0.000153495 16 3.58216 16 8.00043V16H10.7277L8.69334 13.9656V8.92857H12.0002L8.00043 2.66681L3.99979 8.92857H7.30752V13.9656L5.27311 16H0V8.00043C0 3.58207 3.58207 0 8.00043 0Z"
      />
    </svg>
  );
}
