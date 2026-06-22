"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import ListItem from "../ListItem/ListItem";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";
import Image from "next/image";

// constants
import { aboutListItems } from "@/data/aboutListItems";
import { ANIM_ABOUT_LIST_ITEM } from "@/constants/animation";

// hooks
import useParallax from "@/hooks/useParallax";

// providers / context
import { AboutActiveItemContext } from "@/providers/ActiveItemProvider/ActiveItemProvider";

// styles
import css from "./ListAnimated.module.css";

// utility
import React from "react";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function ListAnimated() {
  const { activeId } = React.useContext(AboutActiveItemContext);
  const containerRef = React.useRef(null);
  const parallaxY = useParallax(containerRef, 0.07);

  return (
    <>
      {/* text */}
      <ul className={css.list_text}>
        {aboutListItems.map(({ id, text, icon }) => (
          <ListItem key={id} id={id} icon={icon}>
            {text}
          </ListItem>
        ))}
      </ul>

      {/* images */}
      <ul ref={containerRef} className={css.container_img}>
        <div className={css.container_dots_top}>
          <Dot />
          <Dot />
        </div>
        {aboutListItems.map(({ id, img, text }) => (
          <MotionImage
            key={id}
            src={img}
            alt={text}
            loading="lazy"
            className={css.img}
            style={{ y: parallaxY }}
            initial={ANIM_ABOUT_LIST_ITEM.image.initial}
            animate={{
              opacity:
                id === activeId
                  ? ANIM_ABOUT_LIST_ITEM.image.animate.end
                  : ANIM_ABOUT_LIST_ITEM.image.animate.start,
            }}
            transition={ANIM_ABOUT_LIST_ITEM.image.transition}
          />
        ))}
        <div className={css.container_dots_bottom}>
          <Dot />
          <Dot />
        </div>
      </ul>
    </>
  );
}
