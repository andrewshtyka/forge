"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";

// constants

// hooks

// providers / context

// styles
import css from "./Tag.module.css";

// utility
import React from "react";
import { ANIM_TAG } from "@/constants/animation";

// #endregion ===========================

export default function Tag({ children }) {
  const tagRef = React.useRef(null);
  const isInView = useInView(tagRef, {
    margin: "0% 0% -15% 0%",
    once: true,
  });

  return (
    <div ref={tagRef} className={css.container}>
      <motion.div
        className={css.tag}
        initial={ANIM_TAG.initial}
        animate={{
          clipPath: isInView ? ANIM_TAG.animate.end : ANIM_TAG.animate.start,
        }}
        transition={ANIM_TAG.transition}
      >
        <Dot />
        <h4 className="f_h4">{children}</h4>
        <Dot />
      </motion.div>
    </div>
  );
}
