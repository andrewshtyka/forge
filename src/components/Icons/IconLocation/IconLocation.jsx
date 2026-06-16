"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./IconLocation.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function IconLocation({ color = "light" }) {
  let appliedColor;

  if (color === "light") {
    appliedColor = "var(--color-text-light)";
  } else if (color === "dark") {
    appliedColor = "var(--color-text-dark)";
  } else return null;

  return (
    <svg
      width="17"
      height="16"
      viewBox="0 0 17 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={appliedColor}
        strokeWidth="1.2"
        d="M11.1001 8.24442C13.749 8.75609 15.6001 9.92462 15.6001 11.2843C15.6001 13.1156 12.2422 14.6001 8.1001 14.6001C3.95796 14.6001 0.600098 13.1156 0.600098 11.2843C0.600098 9.92462 2.45124 8.75609 5.1001 8.24442M8.1001 10.9159V0.600098L12.0884 3.01137C12.3793 3.18726 12.5248 3.2752 12.5712 3.38599C12.6116 3.48263 12.6084 3.5916 12.5624 3.68578C12.5095 3.79376 12.3591 3.87331 12.0584 4.03242L8.1001 6.12641"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
