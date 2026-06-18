"use client";

// #region ============================== Imports

// animation

// components
import Image from "next/image";
import Dot from "@/components/Dot/Dot";

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
        <div className={css.container_dots_bottom}>
          <Dot />
          <Dot />
        </div>
      </div>
    </div>
  );
}
