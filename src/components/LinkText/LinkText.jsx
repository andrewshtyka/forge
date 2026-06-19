"use client";

// #region ============================== Imports

// animation

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
  el: Wrapper = Link,
  href = "#",
}) {
  // color
  let appliedStyles;
  if (color === "white") {
    appliedStyles = {
      color: "var(--color-text-light)",
      textDecorationColor: "var(--color-text-light)",
    };
  } else if (color === "black") {
    appliedStyles = {
      color: "var(--color-text-dark)",
      textDecorationColor: "var(--color-text-dark)",
    };
  } else if (color === "blue") {
    appliedStyles = {
      color: "var(--color-text-accent-primary)",
      textDecorationColor: "var(--color-accent-primary)",
    };
  } else return null;

  // size
  let appliedClassType;
  if (type === "desktop") {
    appliedClassType = "f_body";
  } else if (type === "mobile") {
    appliedClassType = "f_menu";
  } else return null;

  // underline
  const appliedClassUnderline = hasUnderline ? `${css.hasUnderline}` : " ";

  // final classes
  const appliedClasses = `${appliedClassType} ${appliedClassUnderline}`;

  // external

  const options =
    Wrapper === "a" ? { target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      href={href}
      className={appliedClasses}
      style={appliedStyles}
      {...options}
    >
      {children}
    </Wrapper>
  );
}
