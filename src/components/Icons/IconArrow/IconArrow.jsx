"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./IconArrow.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function IconArrow({
  size = "small",
  stroke = 1.2,
  color = "white",
}) {
  let width;
  let height;
  if (size === "small") {
    width = 12;
    height = 10;
  } else if (size === "big") {
    width = 18;
    height = 15;
  }

  let appliedColor;
  if (color === "white") appliedColor = "var(--color-bg-primary)";
  else if (color === "black") appliedColor = "var(--color-bg-secondary)";
  else if (color === "blue") appliedColor = "var(--color-bg-accent)";
  else return null;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.600098 4.84814H10.6001M6.8501 8.84814L10.6001 4.84814L6.8501 0.848145"
        stroke={appliedColor}
        strokeWidth={stroke}
        strokeLinecap="square"
      />
    </svg>
  );
}
