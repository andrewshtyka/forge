"use client";

// #region ============================== Imports

// assets

// animation
import { motion, cubicBezier } from "motion/react";

// components

// constants

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
      >
        <span className={css.container}>
          <motion.span
            className={css.element}
            layout={true}
            style={{ gridColumn: isHovered ? "2 / -1" : "1 / 2" }}
            transition={animBtnPrimary.text.transition}
          >
            {icon}
          </motion.span>
          <motion.span
            className={css.element}
            layout={true}
            style={{ gridColumn: isHovered ? "1 / 2" : "2 / -1" }}
            transition={animBtnPrimary.text.transition}
          >
            {children}
          </motion.span>
        </span>

        <motion.span
          className={css.img}
          animate={{ transform: `rotate(${isHovered ? "30deg" : "0deg"})` }}
          transition={animBtnPrimary.img.transition}
        >
          {img}
        </motion.span>
      </button>
    );
  }

  if (type === "secondary") {
    const text = children.split(" ");
    console.log(text);

    return (
      <motion.button
        type="button"
        className={`f_description f_uppercase ${css.button}`}
        style={{ ...appliedStylesButton }}
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        //
        // animation
        initial={animBtnSecondary.initial}
        animate={{ width: isHovered ? "95%" : "100%" }}
        transition={
          isHovered
            ? animBtnSecondary.transition_start
            : animBtnSecondary.transition_end
        }
      >
        <span className={css.element}>{children}</span>
        <motion.span
          className={css.element}
          animate={{ transform: `rotate(${isHovered ? "-45deg" : "0deg"})` }}
          transition={
            isHovered
              ? animBtnSecondary.transition_start
              : animBtnSecondary.transition_end
          }
        >
          {icon}
        </motion.span>
      </motion.button>
    );
  }
}

const animBtnPrimary = {
  text: {
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.2,
    },
  },

  img: {
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};

const animBtnSecondary = {
  initial: {
    width: "100%",
  },
  transition_start: {
    duration: 0.75,
    type: "spring",
    bounce: 0.5,
  },
  transition_end: {
    duration: 0.3,
    ease: cubicBezier(0.5, 0, 0.3, 1),
  },
};
