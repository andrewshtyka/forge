"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import IconLogo from "@/components/_NOT_INTERACTIVE/Icons/IconLogo/IconLogo";
import MenuButton from "@/components/_INTERACTIVE/MenuButton/MenuButton";
import IconLocation from "@/components/_NOT_INTERACTIVE/Icons/IconLocation/IconLocation";
import LinkText from "@/components/_INTERACTIVE/LinkText/LinkText";

// constants
import { ANIM_HEADER } from "@/constants/animation";

// hooks

// providers / context
import { MenuStateContext } from "@/providers/MenuStateProvider/MenuStateProvider";
import { PreloaderContext } from "@/providers/PreloaderProvider/PreloaderProvider";

// styles
import css from "./Header.module.css";

// utility
import React from "react";

// #endregion ===========================

const menuItems = ["Reserve a machine", "Tool library", "Get in touch"];

export default function Header() {
  const { isVisible } = React.useContext(PreloaderContext);
  const { isMenuOpened } = React.useContext(MenuStateContext);
  const blendMode = useDelayedBlendMode(isMenuOpened);

  return (
    <motion.header
      className={`grid ${css.header}`}
      style={{
        mixBlendMode: blendMode,
      }}
      initial={ANIM_HEADER.layout.initial}
      animate={{
        y: isVisible
          ? ANIM_HEADER.layout.animate.end
          : ANIM_HEADER.layout.animate.start,
      }}
      transition={ANIM_HEADER.layout.transition}
    >
      {/* logo */}
      <span className={css.container_logo}>
        <IconLogo />
        <p className="f_body">Forge</p>
      </span>

      {/* address - desktop */}
      <address className={`f_body ${css.address}`}>
        <IconLocation color="white" size={20} stroke={1.2} />
        Canada, Montreal
      </address>

      {/* links - desktop */}
      <nav className={css.nav}>
        <ul className={css.container_links}>
          {menuItems.map((item, i) => (
            <li key={i}>
              <LinkText type="desktop">{item}</LinkText>
            </li>
          ))}
        </ul>
      </nav>

      {/* lang - desktop */}
      <div className={css.lang}>
        <LinkText hasUnderline={false}>Eng</LinkText>
        <span className={css.divider}>/</span>
        <LinkText>Fra</LinkText>
      </div>

      {/* menu button - mobile */}
      <MenuButton />
    </motion.header>
  );
}

// delay before removing "difference" - to avoid color changes
function useDelayedBlendMode(isMenuOpened) {
  const [blendMode, setBlendMode] = React.useState("difference");

  React.useEffect(() => {
    if (isMenuOpened) {
      const timer = setTimeout(() => {
        setBlendMode("normal");
      }, 0);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setBlendMode("difference");
      }, ANIM_HEADER.menu.headerBlendDelay);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpened]);

  return blendMode;
}
