"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_details.webp";

// components
import Tag from "@/components/Tag/Tag";
import Image from "next/image";

// constants

// hooks

// providers / context

// styles
import css from "./Manufacture.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Manufacture() {
  return (
    <section className={css.section}>
      <div className={css.top}>
        {/* tag */}
        <Tag>Manufacture</Tag>

        {/* title */}
        <h2 className={`f_h1 ${css.title}`}>
          The Most Popular{" "}
          <Image src={img_title} alt="precision" className={css.img_title} /> We
          Produce
        </h2>
      </div>
    </section>
  );
}
