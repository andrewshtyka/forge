"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./Divider.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Divider({ colorBg = "white" }) {
  let backgroundColor;

  if (colorBg === "white") backgroundColor = "var(--color-gray-900)";
  else if (colorBg === "black") backgroundColor = "var(--color-gray-200)";

  return <div className={css.divider} style={{ backgroundColor }}></div>;
}
