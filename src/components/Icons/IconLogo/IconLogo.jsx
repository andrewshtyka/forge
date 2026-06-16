"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./IconLogo.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function IconLogo({ color = "light" }) {
  let appliedColor;

  if (color === "light") {
    appliedColor = "var(--color-text-light)";
  } else if (color === "dark") {
    appliedColor = "var(--color-text-dark)";
  } else return null;

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={appliedColor}
        d="M9 0V18M18 9L0 9M2.63672 15.3639L15.3646 2.63599M15.3633 15.3642L2.63536 2.6363"
        strokeWidth="1.5"
      />
    </svg>
  );
}
