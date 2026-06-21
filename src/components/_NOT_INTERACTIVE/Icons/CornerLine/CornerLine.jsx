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

export default function CornerLine({ style, ...rest }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      {...rest}
    >
      <path
        d="M1 15V5C1 2.79086 2.79086 1 5 1H15"
        stroke="var(--color-bg-primary)"
        strokeWidth="2"
      />
    </svg>
  );
}
