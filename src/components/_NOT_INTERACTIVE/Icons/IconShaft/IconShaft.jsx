"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components

// constants
import { ANIM_ABOUT_LIST_ITEM } from "@/constants/animation";

// hooks

// providers / context
import { AboutActiveItemContext } from "@/providers/ActiveItemProvider/ActiveItemProvider";

// styles
// import css from '.'

// utility
import React from "react";

// #endregion ===========================

export default function IconShaft({ size = 16, id }) {
  const { activeId } = React.useContext(AboutActiveItemContext);

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={ANIM_ABOUT_LIST_ITEM.icon.initial}
      animate={{
        fill:
          id === activeId
            ? ANIM_ABOUT_LIST_ITEM.icon.animate.end
            : ANIM_ABOUT_LIST_ITEM.icon.animate.start,
      }}
      transition={ANIM_ABOUT_LIST_ITEM.icon.transition}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0C10.9455 0 13.3333 2.28945 13.3333 5.11364V13.2727H16V16H10.2086L7.9995 13.7407L5.79036 16H0V13.2727H2.66667V5.11364C2.66667 2.28945 5.05448 0 8 0ZM10.6667 5.45455C10.6667 6.96078 9.47276 8.18182 8 8.18182C6.52724 8.18182 5.33333 6.96078 5.33333 5.45455C5.33333 3.94831 6.52724 2.72727 8 2.72727C9.47276 2.72727 10.6667 3.94831 10.6667 5.45455Z"
      />
    </motion.svg>
  );
}
