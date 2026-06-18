"use client";

// #region ============================== Imports

// animation

// assets
import img_1 from "@/assets/images/portfolio/img_portfolio_1.webp";

// components
import Image from "next/image";

// constants

// hooks

// providers / context

// styles
import css from "./Images.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Images() {
  return (
    <div className={css.container}>
      <Image src={img_1} alt="" className={css.img} />
    </div>
  );
}
