"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import IconLocation from "../Icons/IconLocation/IconLocation";
import LinkText from "../LinkText/LinkText";
import DotsBG from "../DotsBG/DotsBG";

// constants
import { ANIM_HEADER } from "@/constants/animation";

// hooks

// providers / context
import { MenuStateContext } from "@/providers/MenuStateProvider/MenuStateProvider";

// styles
import css from "./MenuMobile.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function MenuMobile() {
  const { isMenuOpened } = React.useContext(MenuStateContext);

  const clipPathValue = isMenuOpened
    ? "inset(0% 0% 0% 0%)"
    : "inset(0% 0% 100% 0%)";

  const menuItems = [
    "Reserve a machine",
    "Tool library",
    "Get in touch",
    "Upload design",
  ];

  return (
    <motion.article
      className={css.article}
      initial={{ clipPath: "inset(0% 100% 100% 0%)" }}
      animate={{ clipPath: clipPathValue }}
      transition={{
        duration: ANIM_HEADER.menu.transition,
        ease: ANIM_HEADER.menu.ease,
      }}
    >
      {/* dots bg */}
      <DotsBG color="blue" />

      {/* top */}
      <div className={css.container_top}>
        {/* address */}
        <address className={`f_body ${css.address}`}>
          <IconLocation color="light" />
          Canada, Montreal
        </address>

        {/* links */}
        <nav>
          <ul className={css.container_links}>
            {menuItems.map((item, i) => (
              <li key={i}>
                <LinkText type="mobile">{item}</LinkText>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* bottom */}
      <div>
        <LinkText hasUnderline={false}>Eng</LinkText>
        <span className={css.divider}>/</span>
        <LinkText>Fra</LinkText>
      </div>
    </motion.article>
  );
}
