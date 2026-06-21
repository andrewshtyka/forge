"use client";

// #region ============================== Imports

// animation
import Lenis from "lenis";

// components

// constants

// hooks

// providers / context

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function useLenis() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
}
