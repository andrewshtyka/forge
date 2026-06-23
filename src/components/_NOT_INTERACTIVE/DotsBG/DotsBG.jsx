"use client";

// #region ============================== Imports

// animation
import { motion, useScroll, useTransform } from "motion/react";

// components

// constants

// hooks

// providers / context

// styles
import css from "./DotsBG.module.css";

// utility
import React from "react";

// #endregion ===========================

/**
 * Put component inside parent (parent must have "position: relative")
 */

export default function DotsBG({
  saturation = 100,
  color = "gray",
  zIndex = -1,
}) {
  let appliedColor;

  if (color === "gray") {
    appliedColor = "var(--color-dots-primary)";
  } else if (color === "blue") {
    appliedColor = "var(--color-dots-secondary)";
  } else return null;

  // custom position of dots
  const backgroundImage = `radial-gradient(oklch(from ${appliedColor} l c h / ${saturation}%) 1px, transparent 1px)`;

  return (
    <motion.div
      className={css.dots}
      style={{ backgroundImage, zIndex }}
    ></motion.div>
  );
}
