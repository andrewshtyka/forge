"use client";

// #region ============================== Imports

// animate
import { AnimatePresence, motion } from "motion/react";

// components

// constants
import { MIN_PRELOADER_TIME } from "@/constants/animation";

// styles
import css from "./Preloader.module.css";

// utility
import { useEffect, useState } from "react";

// #endregion ===========================

export default function Preloader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
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
