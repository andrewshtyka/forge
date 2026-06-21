"use client";

// #region ============================== Imports

// animation
import { motion, cubicBezier } from "motion/react";

// components
import Link from "next/link";

// constants

// hooks

// providers / context

// styles
import css from "./LinkText.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function LinkText({
  children,
  color = "white",
  hasUnderline = true,
  type = "desktop",
  el: Tag = Link,
  href = "#",
  ...rest
}) {
  const [isHovered, setIsHovered] = React.useState(false);

  // style for link: color text and underline
  let colorText;
  let colorBg;
  if (color === "white") {
    colorText = "var(--color-text-light)";
    colorBg = "var(--color-text-light)";
  } else if (color === "black") {
    colorText = "var(--color-text-dark)";
    colorBg = "var(--color-text-dark)";
  } else if (color === "blue") {
    colorBg = "var(--color-text-accent-primary)";
    colorText = "var(--color-text-accent-primary)";
  } else return null;

  // attributes for link: if <a> make external, if Link - add nothing
  const attributesExternal =
    Tag === "a" ? { target: "_blank", rel: "noopener noreferrer" } : {};

  // element focusable (no underline = focusable)
  const attributesFocusable = hasUnderline ? {} : { tabIndex: "-1" };

  // class for Text: size of text
  let textSizeClass;
  if (type === "desktop") {
    textSizeClass = "f_body";
  } else if (type === "mobile") {
    textSizeClass = "f_menu";
  } else return null;

  return (
    <Tag
      href={href}
      style={{
        color: colorText,
        pointerEvents: hasUnderline ? "initial" : "none",
      }}
      className={css.link}
      {...attributesExternal}
      {...attributesFocusable}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
      {...rest}
    >
      <span className={`${css.text} ${textSizeClass}`}>
        {children}

        {/* desktop underline - DOES animate  on hover */}
        {hasUnderline && (
          <motion.span
            className={css.underline}
            initial={animUnderline.initial}
            animate={{
              height: isHovered ? "calc(100% + 0.075em)" : "5%",
              width: isHovered ? "calc(100% + 0.5em)" : "100%",
            }}
            transition={
              isHovered
                ? animUnderline.transition_start
                : animUnderline.transition_end
            }
          ></motion.span>
        )}

        {/* mobile underline - DOESN'T animate on hover */}
        {hasUnderline && (
          <motion.span
            className={css.underline_mob}
            style={{ backgroundColor: colorBg }}
          ></motion.span>
        )}
      </span>
    </Tag>
  );
}

const animUnderline = {
  initial: {
    height: "5%",
    width: "100%",
    x: "-50%",
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
