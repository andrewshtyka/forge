"use client";

// #region ============================== Imports

// assets

// animation
import { motion } from "motion/react";

// components

// constants
import { ANIM_BTN_PRIMARY, ANIM_BTN_SECONDARY } from "@/constants/animation";

// hooks

// providers / context

// styles
import css from "./Button.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Button({
  children,
  type = "primary", // primary | secondary
  colorBg = "blue", // blue | white
  isTextBlack = false,
  icon,
  img,
  isWide = false,
  onClick,
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  let appliedStylesButton;
  if (colorBg === "blue") {
    appliedStylesButton = {
      backgroundColor: "var(--color-button-primary)",
      color: "var(--color-text-light)",
      stroke: "var(--color-text-light)",
      width: isWide ? "100%" : "auto",
    };
  } else if (colorBg === "white") {
    appliedStylesButton = {
      backgroundColor: "var(--color-button-secondary)",
      color: isTextBlack
        ? "var(--color-text-black)"
        : "var(--color-text-accent-primary)",
      stroke: "var(--color-text-accent-primary)",
      width: isWide ? "100%" : "auto",
    };
  } else return null;

  if (type === "primary") {
    return (
      <button
        type="button"
        className={`f_description f_uppercase ${css.button}`}
        style={appliedStylesButton}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        <span className={css.container}>
          <motion.span
            className={css.element}
            layout={true}
            style={{ gridColumn: isHovered ? "2 / -1" : "1 / 2" }}
            transition={ANIM_BTN_PRIMARY.text.transition}
          >
            {icon}
          </motion.span>
          <motion.span
            className={css.element}
            layout={true}
            style={{ gridColumn: isHovered ? "1 / 2" : "2 / -1" }}
            transition={ANIM_BTN_PRIMARY.text.transition}
          >
            {children}
          </motion.span>
        </span>

        <motion.span
          className={css.img}
          animate={{ transform: `rotate(${isHovered ? "30deg" : "0deg"})` }}
          transition={ANIM_BTN_PRIMARY.img.transition}
        >
          {img}
        </motion.span>
      </button>
    );
  }

  if (type === "secondary") {
    return (
      <motion.button
        type="button"
        className={`f_description f_uppercase ${css.button}`}
        style={{ ...appliedStylesButton }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        //
        // animation
        initial={ANIM_BTN_SECONDARY.initial}
        animate={{ width: isHovered ? "95%" : "100%" }}
        transition={
          isHovered
            ? ANIM_BTN_SECONDARY.transition_start
            : ANIM_BTN_SECONDARY.transition_end
        }
      >
        <span className={css.element}>{children}</span>
        <motion.span
          className={css.element}
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovered ? -45 : 0 }}
          transition={
            isHovered
              ? ANIM_BTN_SECONDARY.transition_start
              : ANIM_BTN_SECONDARY.transition_end
          }
        >
          {icon}
        </motion.span>
      </motion.button>
    );
  }
}
