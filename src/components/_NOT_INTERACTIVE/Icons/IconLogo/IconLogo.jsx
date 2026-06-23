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

export default function IconLogo({
  color = "white",
  size = 18,
  isRotatingRight = false,
  isRotatingLeft = false,
  ...rest
}) {
  let appliedColor;
  if (color === "white") {
    appliedColor = "var(--color-bg-primary)";
  } else if (color === "black") {
    appliedColor = "var(--color-bg-secondary)";
  } else return null;

  let appliedClass;
  if (isRotatingRight) {
    appliedClass = `${css.icon_left}`;
  } else if (isRotatingLeft) {
    appliedClass = `${css.icon_right}`;
  } else appliedClass = " ";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={appliedClass}
      {...rest}
    >
      <path
        stroke={appliedColor}
        d="M9 0V18M18 9L0 9M2.63672 15.3639L15.3646 2.63599M15.3633 15.3642L2.63536 2.6363"
        strokeWidth="1.5"
      />
    </svg>
  );
}
