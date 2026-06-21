"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import IconPlay from "@/components/_NOT_INTERACTIVE/Icons/IconPlay/IconPlay";

// constants

// hooks
import useFollowPointer from "@/hooks/useFollowPointer";

// providers / context

// styles
import css from "./ButtonFullScreen.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ButtonFullScreen({ onClick }) {
  // button
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const { x, y } = useFollowPointer(btnRef, containerRef, isHovered);

  return (
    <motion.button
      ref={containerRef}
      type="button"
      className={css.button}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={() => setIsHovered(false)}
    >
      {/* button */}
      <motion.span
        ref={btnRef}
        className={css.content_button}
        style={{ x, y }}
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{
          opacity: 1,
          transition: { duration: 0.1, delay: 0.5 },
        }}
        viewport={{ once: true }}
        exit={{ scale: 0 }}
      >
        <IconPlay />
      </motion.span>
    </motion.button>
  );
}
