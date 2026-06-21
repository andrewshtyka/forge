"use client";

// #region ============================== Imports

// animation

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

// #endregion ===========================

export default function ImageMasked({ src, alt = "" }) {
  return (
    <div className={css.container}>
      <div className={css.border_radius}>
        <div className={css.container_dots_top}>
          <Dot />
          <Dot />
        </div>
        <Image src={src} alt={alt} className={css.img} />

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
