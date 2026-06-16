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
  color = "dark",
  hasUnderline = true,
  type = "desktop",
}) {
  // color
  let appliedStyles;
  if ((color = "light")) {
    appliedStyles = {
      color: "var(--color-text-light)",
      textDecorationColor: "var(--color-text-light)",
    };
  } else if ((color = "dark")) {
    appliedStyles = {
      color: "var(--color-text-dark)",
      textDecorationColor: "var(--color-text-dark)",
    };
  } else if ((color = "blue")) {
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

  return (
    <Link href="#" className={`f_body ${appliedClasses}`} style={appliedStyles}>
      {children}
    </Link>
  );
}
