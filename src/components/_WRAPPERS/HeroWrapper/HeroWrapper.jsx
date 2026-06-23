"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import DotsBG from "@/components/_NOT_INTERACTIVE/DotsBG/DotsBG";

// constants
import { ANIM_PRELOADER } from "@/constants/animation";

// hooks

// providers / context
import { PreloaderContext } from "@/providers/PreloaderProvider/PreloaderProvider";

// styles
import css from "./HeroWrapper.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function HeroWrapper({ children }) {
  const { isVisible } = React.useContext(PreloaderContext);

  return (
    <>
      <div className={css.bg_black} />

      <motion.div
        className={css.mask}
        initial={ANIM_PRELOADER.wrapperMask.initial}
        animate={{
          rotate: ANIM_PRELOADER.wrapperMask.animate.rotate,
          maskSize: isVisible
            ? ANIM_PRELOADER.wrapperMask.animate.start
            : ANIM_PRELOADER.wrapperMask.animate.end,
        }}
        transition={{
          duration: isVisible
            ? ANIM_PRELOADER.wrapperMask.transition.start.duration
            : ANIM_PRELOADER.wrapperMask.transition.end.duration,
          ease: ANIM_PRELOADER.wrapperMask.transition.ease,
        }}
      >
        <div className={css.bg_white} />
        <DotsBG zIndex={0} />
        {children}
      </motion.div>
    </>
  );
}
