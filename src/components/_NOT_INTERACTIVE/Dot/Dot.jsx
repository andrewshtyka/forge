"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components

// constants

// hooks

// providers / context

// styles
import css from "./Dot.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Dot({
  color = "white",
  size = "small",
  initial = {},
  animate = {},
  transition = {},
}) {
  let backgroundColor;
  let width;

  if (color === "white") backgroundColor = "var(--color-bg-primary)";
  else if (color === "black") backgroundColor = "var(--color-bg-secondary)";
  else if (color === "blue") backgroundColor = "var(--color-bg-accent)";
  else return null;

  if (size === "big") width = "var(--space-3)";
  else if (size === "small") width = "var(--space-2)";
  else return null;

  return (
    <motion.div
      className={css.dot}
      style={{ backgroundColor, width }}
      initial={initial}
      animate={animate}
      transition={transition}
    ></motion.div>
  );
}
