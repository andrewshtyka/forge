"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// assets
import img_ceo from "@/assets/images/ceo.webp";

// components
import Image from "next/image";
import Divider from "@/components/_NOT_INTERACTIVE/Divider/Divider";

// constants

// hooks
import useParallax from "@/hooks/useParallax";

// providers / context

// styles
import css from "./Quote.module.css";

// utility
import React from "react";

const MotionImage = motion.create(Image);

// #endregion ===========================

export default function Quote() {
  const containerRef = React.useRef(null);
  const parallaxY = useParallax(containerRef, 0.015);

  return (
    <article className={css.article}>
      {/* top */}
      <div className={css.top}>
        <div ref={containerRef} className={css.container_img}>
          <MotionImage
            src={img_ceo}
            alt="Ayrton Senna"
            loading="lazy"
            className={css.img}
            style={{ y: parallaxY }}
          />
        </div>

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
