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

export default function IconPlate({ size = 16, id }) {
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
      <path d="M16 6.02831C15.2133 2.9285 12.6141 0.534777 9.37425 0V2.66667H12.1226V13.3333H9.37425V16C12.6141 15.4652 15.2133 13.0715 16 9.97169L13.9679 8L16 6.02831Z" />
      <path d="M3.34309e-06 6.0287C0.786596 2.92871 3.38585 0.534799 6.62585 0V2.66667H3.87746V13.3333H6.62585V16C3.38585 15.4652 0.786589 13.0713 0 9.97128L2.03171 7.99999L3.34309e-06 6.0287Z" />
    </motion.svg>
  );
}
