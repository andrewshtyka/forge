"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_cnc.webp";
import img_icon from "@/assets/images/mesh.webp";

// components
import Image from "next/image";
import IconArrow from "../Icons/IconArrow/IconArrow";

// constants

// hooks

// providers / context

// styles
import css from "./Hero.module.css";

// utility
import React from "react";
import Button from "../Button/Button";

// #endregion ===========================

export default function Hero() {
  return (
    <section className={css.section}>
      {/* title */}
      <h1 className={`f_h1 ${css.title}`}>
        Precision
        <Image src={img_title} alt="CNC" className={css.img_title} />
        Parts Shipped as Fast as Tomorrow
      </h1>

      {/* animated images */}

      <div className={css.container_bottom}>
        <p className={`f_description ${css.description}`}>
          12+ years of delivering perfect details
        </p>

        <div className={css.container_info}>
          <p className="f_body">
            Upload your CAD file, and we’ll take care of machining finishing,
            and shipping – accurate parts delivered fast, no stress
          </p>
          <Button
            icon={<IconArrow />}
            img={<Image src={img_icon} alt="mesh" />}
          >
            Upload your design
          </Button>
        </div>

        <p className={`f_description ${css.description}`}>
          100,000+ parts manufactured annually
        </p>
      </div>
    </section>
  );
}
