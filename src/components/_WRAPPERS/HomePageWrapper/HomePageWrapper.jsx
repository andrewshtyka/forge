"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks
import useBlurOnEscape from "@/hooks/useBlurOnEscape";
import useLenis from "@/hooks/useLenis";
import useScrollToTop from "@/hooks/useScrollToTop";

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function HomePageWrapper({ children }) {
  useScrollToTop();
  useBlurOnEscape();
  useLenis();

  return <>{children}</>;
}
