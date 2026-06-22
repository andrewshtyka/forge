"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Link from "next/link";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Divider from "@/components/_NOT_INTERACTIVE/Divider/Divider";

// constants

// hooks

// providers / context
import { PortfolioActiveItemContext } from "@/providers/ActiveItemProvider/ActiveItemProvider";

// styles
import css from "./ListItemDesktop.module.css";

// utility
import React from "react";
import { ANIM_PORTFOLIO_LIST_ITEM } from "@/constants/animation";

// #endregion ===========================

const MotionIcon = motion.create(IconArrow);

export default function ListItemDesktop({ title, text, isLast, id }) {
  const { activeId, setActiveId } = React.useContext(
    PortfolioActiveItemContext,
  );

  let borderTop;
  if (id !== 1) borderTop = "var(--space-px) solid var(--color-gray-200)";

  return (
    <li>
      <Link
        href="#"
        className={css.item}
        style={{ borderTop }}
        onMouseEnter={() => setActiveId(id)}
        onFocus={() => setActiveId(id)}
      >
        {/* icon arrow */}
        <span className={css.container_icon}>
          <MotionIcon
            color="white"
            size="big"
            initial={ANIM_PORTFOLIO_LIST_ITEM.initial}
            animate={{
              x:
                id === activeId
                  ? ANIM_PORTFOLIO_LIST_ITEM.animate.position.end
                  : ANIM_PORTFOLIO_LIST_ITEM.animate.position.start,
              transition:
                id === activeId
                  ? ANIM_PORTFOLIO_LIST_ITEM.transition.end
                  : ANIM_PORTFOLIO_LIST_ITEM.transition.start,
            }}
          />
        </span>

        {/* title */}
        <motion.h3
          className={`f_h3 ${css.title}`}
          initial={ANIM_PORTFOLIO_LIST_ITEM.initial}
          animate={{
            x:
              id === activeId
                ? ANIM_PORTFOLIO_LIST_ITEM.animate.position.end
                : ANIM_PORTFOLIO_LIST_ITEM.animate.position.start,
            color:
              id === activeId
                ? ANIM_PORTFOLIO_LIST_ITEM.animate.color.end
                : ANIM_PORTFOLIO_LIST_ITEM.animate.color.start,
            transition:
              id === activeId
                ? ANIM_PORTFOLIO_LIST_ITEM.transition.end
                : ANIM_PORTFOLIO_LIST_ITEM.transition.start,
          }}
        >
          {title}
        </motion.h3>

        {/* subtitle */}
        <motion.p
          className={`f_description f_uppercase ${css.text}`}
          initial={ANIM_PORTFOLIO_LIST_ITEM.initial}
          animate={{
            color:
              id === activeId
                ? ANIM_PORTFOLIO_LIST_ITEM.animate.color.end
                : ANIM_PORTFOLIO_LIST_ITEM.animate.color.start,
            transition:
              id === activeId
                ? ANIM_PORTFOLIO_LIST_ITEM.transition.end
                : ANIM_PORTFOLIO_LIST_ITEM.transition.start,
          }}
        >
          {text}
        </motion.p>
      </Link>

      {isLast && <Divider colorBg="black" />}
    </li>
  );
}
