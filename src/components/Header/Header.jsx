"use client";

// #region ============================== Imports

// animation

// components
import IconLogo from "../Icons/IconLogo/IconLogo";
import MenuButton from "../MenuButton/MenuButton";
import Link from "next/link";

// constants
import { ANIM_HEADER } from "@/constants/animation";

// hooks

// providers / context
import { MenuStateContext } from "@/providers/MenuStateProvider/MenuStateProvider";

// styles
import css from "./Header.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Header() {
  const { isMenuOpened } = React.useContext(MenuStateContext);
  const blendMode = useDelayedBlendMode(isMenuOpened);

  return (
    <header className={css.header} style={{ mixBlendMode: blendMode }}>
      <Link href="" className={css.container_logo}>
        <IconLogo color="light" />
        <p className="f_logo">Forge</p>
      </Link>

      <MenuButton />
    </header>
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
