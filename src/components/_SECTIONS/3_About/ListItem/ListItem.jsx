"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import Divider from "@/components/_NOT_INTERACTIVE/Divider/Divider";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";

// constants
import { ANIM_ABOUT_LIST_ITEM } from "@/constants/animation";

// hooks

// providers / context

// styles
import css from "./ListItem.module.css";

// utility
import React from "react";
import { AboutActiveItemContext } from "@/providers/ActiveItemProvider/ActiveItemProvider";

// #endregion ===========================

export default function ListItem({ children, id, icon }) {
  const { activeId, setActiveId, setIsTimerRunning } = React.useContext(
    AboutActiveItemContext,
  );

  function handleMouseEnter() {
    setIsTimerRunning(false);
    setActiveId(id);
  }

  function handleMouseLeave() {
    setIsTimerRunning(true);
  }

  return (
    <li>
      <Divider />

      <button
        type="button"
        className={css.item}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleMouseEnter}
        onBlur={handleMouseLeave}
      >
        {/* left */}
        <div className={css.text}>
          <div className={css.container_num}>
            <p className="f_description">0{id}.</p>
            <motion.span
              className={css.icon_active}
              initial={ANIM_ABOUT_LIST_ITEM.arrow.initial}
              animate={{
                x:
                  id === activeId
                    ? ANIM_ABOUT_LIST_ITEM.arrow.animate.end
                    : ANIM_ABOUT_LIST_ITEM.arrow.animate.start,
              }}
              transition={ANIM_ABOUT_LIST_ITEM.arrow.transition}
            >
              <IconArrow color="blue" size="big" />
            </motion.span>
          </div>

          <motion.h3
            className={`f_h3 ${css.title}`}
            initial={ANIM_ABOUT_LIST_ITEM.text.initial}
            animate={{
              color:
                id === activeId
                  ? ANIM_ABOUT_LIST_ITEM.text.animate.end
                  : ANIM_ABOUT_LIST_ITEM.text.animate.start,
            }}
            transition={ANIM_ABOUT_LIST_ITEM.text.transition}
          >
            {children}
          </motion.h3>
        </div>

        {/* right */}
        <div className={css.container_icon}>{icon}</div>
      </button>
    </li>
  );
}
