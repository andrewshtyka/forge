"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks
import { useBlurOnEscape } from "@/hooks/useBlurOnEscape";

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function HomePageWrapper({ children }) {
  useBlurOnEscape();

  return <>{children}</>;
}
