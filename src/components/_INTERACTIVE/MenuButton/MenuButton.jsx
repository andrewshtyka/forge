"use client";

// #region ============================== Imports

// animation

// components

// constants
import { ANIM_HEADER } from "@/constants/animation";

// hooks

// providers / context
import { MenuStateContext } from "@/providers/MenuStateProvider/MenuStateProvider";

// styles
import css from "./MenuButton.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function MenuButton({}) {
  const { isMenuOpened, setIsMenuOpened } = React.useContext(MenuStateContext);

  let appliedStylesLine_1;
  let appliedStylesLine_2;

  if (isMenuOpened) {
    appliedStylesLine_1 = {
      transform: "translate(-50%, -50%) rotate(-45deg)",
      transition: `transform ${ANIM_HEADER.button.transition}s ${ANIM_HEADER.button.ease}`,
    };
    appliedStylesLine_2 = {
      transform: "translate(-50%, -50%) rotate(45deg)",
      transition: `transform ${ANIM_HEADER.button.transition}s ${ANIM_HEADER.button.ease}`,
    };
  } else {
    appliedStylesLine_1 = {
      transform: "translate(-50%, calc(var(--space-2) * -1))",
      transition: `transform ${ANIM_HEADER.button.transition}s ${ANIM_HEADER.button.ease}`,
    };
    appliedStylesLine_2 = {
      transform: "translate(-50%, calc(var(--space-2) * 1))",
      transition: `transform ${ANIM_HEADER.button.transition}s ${ANIM_HEADER.button.ease}`,
    };
  }

  return (
    <button
      type="button"
      className={css.button}
      onClick={() => setIsMenuOpened((v) => !v)}
    >
      <span className={css.line_1} style={appliedStylesLine_1}></span>
      <span className={css.line_2} style={appliedStylesLine_2}></span>
    </button>
  );
}
