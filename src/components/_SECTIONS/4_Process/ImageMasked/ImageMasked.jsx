"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Image from "next/image";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";
import Corner from "@/components/_NOT_INTERACTIVE/Icons/Corner/Corner";

// constants

// hooks

// providers / context

// styles
import css from "./ImageMasked.module.css";

// utility
import React from "react";
import useParallax from "@/hooks/useParallax";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function ImageMasked({ src, alt = "" }) {
  const sectionRef = React.useRef(null);
  const parallaxY = useParallax(sectionRef);

  return (
    <div className={css.container}>
      <div ref={sectionRef} className={css.border_radius}>
        <div className={css.container_dots_top}>
          <Dot />
          <Dot />
        </div>
        <MotionImage
          src={src}
          alt={alt}
          className={css.img}
          style={{ y: parallaxY }}
        />

        {/* Masked Lines */}
        <div className={css.container_lines}>
          {/* line 1 */}
          <div className={css.line}>
            <span className={css.top_left}>
              <Corner />
            </span>
            <span className={css.top_right}>
              <Corner />
            </span>
            <span className={css.bottom_left}>
              <Corner />
            </span>
            <span className={css.bottom_right}>
              <Corner />
            </span>
            <span className={css.dots_top}>
              <Dot />
              <Dot />
            </span>
            <span className={css.dots_bottom}>
              <Dot />
              <Dot />
            </span>
          </div>

          {/* line 2 */}
          <div className={`${css.line} ${css.hide}`}>
            <span className={css.top_left}>
              <Corner />
            </span>
            <span className={css.top_right}>
              <Corner />
            </span>
            <span className={css.bottom_left}>
              <Corner />
            </span>
            <span className={css.bottom_right}>
              <Corner />
            </span>
            <span className={css.dots_top}>
              <Dot />
              <Dot />
            </span>
            <span className={css.dots_bottom}>
              <Dot />
              <Dot />
            </span>
          </div>

          {/* line 3 */}
          <div className={`${css.line} ${css.hide}`}>
            <span className={css.top_left}>
              <Corner />
            </span>
            <span className={css.top_right}>
              <Corner />
            </span>
            <span className={css.bottom_left}>
              <Corner />
            </span>
            <span className={css.bottom_right}>
              <Corner />
            </span>
            <span className={css.dots_top}>
              <Dot />
              <Dot />
            </span>
            <span className={css.dots_bottom}>
              <Dot />
              <Dot />
            </span>
          </div>
        </div>

        <div className={css.container_dots_bottom}>
          <Dot />
          <Dot />
        </div>
      </div>
    </div>
  );
}
