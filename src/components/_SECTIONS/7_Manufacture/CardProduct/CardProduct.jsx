"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Link from "next/link";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Image from "next/image";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";

// constants
import {
  ANIM_BTN_SECONDARY,
  ANIM_HEADER,
  ANIM_PRODUCT_CARD,
  ANIM_PRODUCT_CARD_BG,
  ANIM_PRODUCT_CARD_DOTS,
} from "@/constants/animation";

// hooks

// providers / context

// styles
import css from "./CardProduct.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);
const MotionIcon = motion.create(IconArrow);

export default function CardProduct({ data }) {
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

        {/* dots - top */}
        <div className={css.container_dots_top}>
          <Dot
            color="black"
            initial={{
              y: ANIM_PRODUCT_CARD_DOTS.initial.y,
              x: ANIM_PRODUCT_CARD_DOTS.initial.x,
            }}
            animate={{
              y: isHovered
                ? ANIM_PRODUCT_CARD_DOTS.animate.end
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
              x: isHovered
                ? ANIM_PRODUCT_CARD_DOTS.animate.end
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
            }}
            transition={ANIM_PRODUCT_CARD_DOTS.transition}
          />
          <Dot
            color="black"
            initial={{
              y: ANIM_PRODUCT_CARD_DOTS.initial.y,
              x: ANIM_PRODUCT_CARD_DOTS.initial.x,
            }}
            animate={{
              y: isHovered
                ? ANIM_PRODUCT_CARD_DOTS.animate.end
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
              x: isHovered
                ? `calc(${ANIM_PRODUCT_CARD_DOTS.animate.end} * -1)`
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
            }}
            transition={ANIM_PRODUCT_CARD_DOTS.transition}
          />
        </div>

        {/* dots - bottom */}
        <div className={css.container_dots_bottom}>
          <Dot
            color="black"
            initial={{
              y: ANIM_PRODUCT_CARD_DOTS.initial.y,
              x: ANIM_PRODUCT_CARD_DOTS.initial.x,
            }}
            animate={{
              y: isHovered
                ? `calc(${ANIM_PRODUCT_CARD_DOTS.animate.end} * -1)`
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
              x: isHovered
                ? ANIM_PRODUCT_CARD_DOTS.animate.end
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
            }}
            transition={ANIM_PRODUCT_CARD_DOTS.transition}
          />
          <Dot
            color="black"
            initial={{
              y: ANIM_PRODUCT_CARD_DOTS.initial.y,
              x: ANIM_PRODUCT_CARD_DOTS.initial.x,
            }}
            animate={{
              y: isHovered
                ? `calc(${ANIM_PRODUCT_CARD_DOTS.animate.end} * -1)`
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
              x: isHovered
                ? `calc(${ANIM_PRODUCT_CARD_DOTS.animate.end} * -1)`
                : ANIM_PRODUCT_CARD_DOTS.animate.start,
            }}
            transition={ANIM_PRODUCT_CARD_DOTS.transition}
          />
        </div>

        {/* top */}
        <motion.div
          className={css.top}
          initial={{ borderBottomColor: "var(--color-gray-900)" }}
          animate={{
            borderBottomColor: isHovered
              ? "var(--color-gray-870)"
              : "var(--color-gray-900)",
          }}
          transition={ANIM_PRODUCT_CARD_BG.transition}
        >
          <h3 className={`f_h3`}>{data.title}</h3>
          <MotionIcon
            color="black"
            size="big"
            initial={{ rotate: 0 }}
            animate={{ rotate: isHovered ? -45 : 0 }}
            transition={
              isHovered
                ? ANIM_BTN_SECONDARY.transition_start
                : ANIM_BTN_SECONDARY.transition_end
            }
          />
        </motion.div>

        {/* details */}
        <ul className={css.list}>
          {data.details.map(({ key, title, text }) => (
            <li key={key} className={css.list_item}>
              <h4 className={`f_h4 ${css.list_title}`}>{title}:</h4>
              <p className={`f_h4`}>{text}</p>
            </li>
          ))}
        </ul>

        {/* img */}
        <div className={css.container_img}>
          <MotionImage
            src={data.img.src}
            alt={data.img.alt}
            loading="lazy"
            className={css.img}
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
          />
        </div>
      </Link>
    </li>
  );
}
