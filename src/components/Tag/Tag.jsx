"use client";

// #region ============================== Imports

// animation

// components
import Dot from "@/components/Dot/Dot";

// constants

// hooks

// providers / context

// styles
import css from "./Tag.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Tag({ children }) {
  return (
    <div className={css.tag}>
      <Dot size="small" />
      <h4 className="f_h4">{children}</h4>
      <Dot size="small" />
    </div>
  );
}
