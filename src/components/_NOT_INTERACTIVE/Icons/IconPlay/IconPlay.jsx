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

export default function IconPlay({ color = "blue" }) {
  let appliedColor;

  if (color === "black") appliedColor = "var(--color-gray-0)";
  else if (color === "blue") appliedColor = "var(--color-blue-0)";
  else return null;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={appliedColor}
        d="M18.9484 9.18373C20.3505 9.96788 20.3505 12.0321 18.9484 12.8163L2.98406 21.7445C1.63943 22.4964 9.67615e-07 21.4986 1.03626e-06 19.9282L1.81679e-06 2.07181C1.88543e-06 0.501402 1.63944 -0.496451 2.98406 0.255542L18.9484 9.18373Z"
      />
    </svg>
  );
}
