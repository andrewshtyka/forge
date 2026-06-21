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

export default function IconJoint({ size = 16, color = "black" }) {
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
        d="M11 7.82423L12 4.23291L9.90078 1.06607C9.05164 -0.355354 6.94836 -0.355357 6.09922 1.06606L4 4.23291L4.97097 7.82423L2.2311 9.54111L0.303074 12.7685C-0.552679 14.201 0.505498 16 2.20386 16H5.72025L7.99901 13.7748L10.2778 16H13.7961C15.4945 16 16.5527 14.201 15.6969 12.7685L13.8206 9.62758L11 7.82423ZM8 3.92766C8.75958 3.92766 9.37534 3.32638 9.37534 2.58468C9.37534 1.84297 8.75958 1.2417 8 1.2417C7.24042 1.2417 6.62466 1.84297 6.62466 2.58468C6.62466 3.32638 7.24042 3.92766 8 3.92766ZM4.08082 13.6498C4.08082 14.3915 3.46506 14.9928 2.70548 14.9928C1.9459 14.9928 1.33014 14.3915 1.33014 13.6498C1.33014 12.9081 1.9459 12.3068 2.70548 12.3068C3.46506 12.3068 4.08082 12.9081 4.08082 13.6498ZM13.2945 14.9928C14.0541 14.9928 14.6699 14.3915 14.6699 13.6498C14.6699 12.9081 14.0541 12.3068 13.2945 12.3068C12.5349 12.3068 11.9192 12.9081 11.9192 13.6498C11.9192 14.3915 12.5349 14.9928 13.2945 14.9928Z"
      />
    </svg>
  );
}
