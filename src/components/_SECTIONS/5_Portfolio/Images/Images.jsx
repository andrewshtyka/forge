"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// assets

// components
import Image from "next/image";

// constants
import { portfolioListItems } from "@/data/portfolioListItems";

// hooks

// providers / context
import { PortfolioActiveItemContext } from "@/providers/ActiveItemProvider/ActiveItemProvider";

// styles
import css from "./Images.module.css";

// utility
import React from "react";
import { li } from "motion/react-client";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function Images() {
  const { activeId } = React.useContext(PortfolioActiveItemContext);

  return (
    <ul className={css.container}>
      {portfolioListItems.map(({ id, img, title }) => (
        <li key={id} style={{ display: "inline" }}>
          <div className={css.container_dots_top}>
            <Dot />
            <Dot />
          </div>
          <MotionImage
            src={img}
            alt={title}
            loading="lazy"
            className={css.img}
            initial={{ opacity: 1 }}
            animate={{ opacity: id === activeId ? 1 : 0 }}
          />
          <div className={css.container_dots_bottom}>
            <Dot />
            <Dot />
          </div>
        </li>
      ))}
    </ul>
  );
}
