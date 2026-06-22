"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_precision.webp";

// components
import Tag from "@/components/_NOT_INTERACTIVE/Tag/Tag";
import Image from "next/image";
import Quote from "./Quote/Quote";
import ListAnimated from "./ListAnimated/ListAnimated";

// constants

// hooks

// providers / context

// styles
import css from "./About.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function About() {
  return (
    <section className={`grid ${css.section}`}>
      {/* tag */}
      <div className={css.container_tag}>
        <Tag>About</Tag>
      </div>

      {/* left part */}
      <div className={css.content_left}>
        {/* title */}
        <h2 className={`f_h1 ${css.title}`}>
          Revolutionizing Manufacturing with Speed &{" "}
          <Image src={img_title} alt="Precision" className={css.img_title} />
        </h2>

        <ListAnimated />
      </div>

      {/* right part */}
      <div className={css.content_right}>
        <Quote />
      </div>
    </section>
  );
}
