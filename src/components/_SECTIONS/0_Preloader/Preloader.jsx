"use client";

// #region ============================== Imports

// animate
import { AnimatePresence, motion } from "motion/react";

// components

// constants
import {
  ANIM_PRELOADER,
  DELAY_BEFORE_SCROLLABLE,
  MIN_PRELOADER_TIME,
} from "@/constants/animation";

// providers / context
import { useLenis } from "@/providers/LenisProvider/LenisProvider";
import { PreloaderContext } from "@/providers/PreloaderProvider/PreloaderProvider";

// styles
import css from "./Preloader.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Preloader() {
  const lenis = useLenis();
  const { isVisible, setIsVisible } = React.useContext(PreloaderContext);

  // - pause or play lenis scroll
  // - block scroll when loaded with DELAY_BEFORE_SCROLLABLE
  React.useEffect(() => {
    if (!lenis) return;

    if (isVisible) {
      window.scrollTo(0, 0);
      lenis.stop();
      return;
    }

    const timeout = setTimeout(() => {
      window.scrollTo(0, 0);
      lenis.start();
    }, DELAY_BEFORE_SCROLLABLE);
    return () => clearTimeout(timeout);
  }, [lenis, isVisible]);

  // wait while resources are loaded, then make preloader invisible
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
      setIsVisible(false);
    });
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className={css.container}
          initial={ANIM_PRELOADER.bg.initial}
          exit={ANIM_PRELOADER.bg.exit}
          transition={ANIM_PRELOADER.bg.transition}
        >
          <div className={css.bg_black} />

          <motion.div
            className={css.mask}
            initial={ANIM_PRELOADER.preloaderMask.initial}
            animate={ANIM_PRELOADER.preloaderMask.animate}
            transition={ANIM_PRELOADER.preloaderMask.transition}
          >
            <div className={css.content}></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
