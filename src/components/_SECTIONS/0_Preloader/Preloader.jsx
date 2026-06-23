"use client";

// #region ============================== Imports

// animate
import { AnimatePresence, motion } from "motion/react";

// components

// constants
import {
  DELAY_BEFORE_SCROLLABLE,
  MIN_PRELOADER_TIME,
} from "@/constants/animation";

// providers / context
import { useLenis } from "@/providers/LenisProvider/LenisProvider";

// styles
import css from "./Preloader.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Preloader() {
  const lenis = useLenis();
  const [visible, setVisible] = React.useState(true);

  // - pauses or plays lenis scroll
  // - also blocks scroll whel loaded with DELAY_BEFORE_SCROLLABLE
  React.useEffect(() => {
    if (!lenis) return;

    if (visible) {
      lenis.stop();
      return;
    }

    const timeout = setTimeout(() => {
      lenis.start();
    }, DELAY_BEFORE_SCROLLABLE);
    return () => clearTimeout(timeout);
  }, [lenis, visible]);

  // waits while resources are loaded, then changes visibility of preloader
  React.useEffect(() => {
    const minDelay = new Promise((res) => setTimeout(res, MIN_PRELOADER_TIME));
    const resourcesReady = new Promise((res) => {
      if (document.readyState === "complete") {
        res();
        return;
      }
      window.addEventListener("load", () => res(), { once: true });
    });
    const fontsReady = document.fonts.ready;

    Promise.all([minDelay, resourcesReady, fontsReady]).then(() => {
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
      setVisible(false);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.section
          className={css.section}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
        ></motion.section>
      )}
    </AnimatePresence>
  );
}
