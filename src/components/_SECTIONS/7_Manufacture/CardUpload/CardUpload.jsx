"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import IconDetail from "@/components/_NOT_INTERACTIVE/Icons/IconDetail/IconDetail";
import CornerLine from "@/components/_NOT_INTERACTIVE/Icons/CornerLine/CornerLine";
import Link from "next/link";

// constants
import { ANIM_PRODUCT_CARD, ANIM_PRODUCT_CARD_BG } from "@/constants/animation";

// hooks

// providers / context

// styles
import css from "./CardUpload.module.css";

// utility
import React from "react";

const MotionCorner = motion.create(CornerLine);

// #endregion ===========================

export default function CardUpload() {
  const [isHovered, setIsHovered] = React.useState(false);

  const clipPathValue = isHovered
    ? "inset(100% 0% 0% 0%)"
    : "inset(0% 0% 0% 0%)";

  return (
    <li>
      <Link
        href="#"
        className={css.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
      >
        {/* bg - color on hover */}
        <div className={css.bg_color}></div>
        <motion.div
          className={css.bg_color_hover}
          initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
          animate={{ clipPath: clipPathValue }}
          transition={ANIM_PRODUCT_CARD_BG.transition}
        ></motion.div>

        <div className={css.inner}>
          <motion.div
            className={css.line_dotted}
            initial={{ scale: 1, opacity: 1 }}
            animate={{
              scale: isHovered ? 1.02 : 1,
              opacity: isHovered ? 0 : 1,
            }}
            transition={ANIM_PRODUCT_CARD.transition}
          ></motion.div>

          {/* corners */}
          <MotionCorner
            style={{
              position: "absolute",
              top: 0,
              left: 0,
            }}
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "-4px" : 0, y: isHovered ? "-4px" : 0 }}
            transition={ANIM_PRODUCT_CARD.transition}
          />

          <MotionCorner
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              scaleX: -1,
            }}
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "4px" : 0, y: isHovered ? "-4px" : 0 }}
            transition={ANIM_PRODUCT_CARD.transition}
          />
          <MotionCorner
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              rotate: -90,
            }}
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "-4px" : 0, y: isHovered ? "4px" : 0 }}
            transition={ANIM_PRODUCT_CARD.transition}
          />
          <MotionCorner
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              scaleX: -1,
              scaleY: -1,
            }}
            initial={{ x: 0 }}
            animate={{ x: isHovered ? "4px" : 0, y: isHovered ? "4px" : 0 }}
            transition={ANIM_PRODUCT_CARD.transition}
          />

          {/* title */}
          <h4 className={`f_h2 ${css.title}`}>Send Us Your 3D Design</h4>

          {/* icon */}
          <motion.div
            className={css.container_icon}
            initial={ANIM_PRODUCT_CARD.initial}
            animate={{
              scale: isHovered
                ? ANIM_PRODUCT_CARD.animate.scale.end
                : ANIM_PRODUCT_CARD.animate.scale.start,
              rotate: isHovered
                ? ANIM_PRODUCT_CARD.animate.rotate.end
                : ANIM_PRODUCT_CARD.animate.rotate.start,
            }}
            transition={ANIM_PRODUCT_CARD.transition}
          >
            <IconDetail size="100%" />
          </motion.div>

          {/* text */}
          <div className={css.bottom}>
            <p className={`f_description f_uppercase ${css.subtitle}`}>
              Supported formats
            </p>
            <p className={`f_h3`}>IGES / STL / FBX / STEP</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
