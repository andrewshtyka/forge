"use client";

// #region ============================== Imports

// animation

// assets
import img_ceo from "@/assets/images/ceo.webp";

// components
import Image from "next/image";
import Divider from "@/components/Divider/Divider";

// constants

// hooks

// providers / context

// styles
import css from "./Quote.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Quote() {
  return (
    <article className={css.article}>
      {/* top */}
      <div className={css.top}>
        <Image src={img_ceo} alt="Ayrton Senna" className={css.img} />

        <div>
          <h3 className={`f_h3 ${css.title}`}>Ayrton Senna</h3>
          <p className={`f_body ${css.description}`}>CEO at Forge</p>
        </div>
      </div>

      {/* text */}
      <div className={css.content}>
        {/* main */}
        <div className={css.container_text}>
          <p className="f_body">
            At Forge, we believe that getting custom CNC parts should be fast,
            reliable, and effortless.
          </p>
          <p className="f_body">
            That’s why we built a fully streamlined platform that turns your CAD
            files into production-ready parts – delivered in as fast as one day.
          </p>
          <p className="f_body">
            Whether you’re prototyping or scaling, we remove the friction from
            manufacturing so you can focus on building what matters.
          </p>
        </div>

        {/* bottom */}
        <div className={css.bottom}>
          <span className={css.divider}>
            <Divider />
          </span>
          <p className={`f_description f_uppercase ${css.description_bottom}`}>
            Every detail matters — we craft each part with care accuracy, and a
            finish that feels just right
          </p>
          <span className={css.divider}>
            <Divider />
          </span>
        </div>
      </div>
    </article>
  );
}
