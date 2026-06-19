// "use client";

// #region ============================== Imports

// assets

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./Button.module.css";

// utility

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
  let appliedStylesButton;
  let appliedStylesIcon;

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
      >
        <span>
          <span className={css.icon} style={appliedStylesIcon}>
            {icon}
          </span>
          {children}
        </span>

        <span className={css.img_icon}>{img}</span>
      </button>
    );
  }

  if (type === "secondary") {
    return (
      <button
        type="button"
        className={`f_description f_uppercase ${css.button}`}
        style={appliedStylesButton}
        onClick={onClick}
      >
        {children}
        {icon}
      </button>
    );
  }
}
