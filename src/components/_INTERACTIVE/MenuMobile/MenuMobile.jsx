"use client";

// #region ============================== Imports

// animation
import { motion } from "motion/react";

// components
import IconLocation from "@/components/_NOT_INTERACTIVE/Icons/IconLocation/IconLocation";
import LinkText from "@/components/_INTERACTIVE/LinkText/LinkText";
import DotsBG from "@/components/_NOT_INTERACTIVE/DotsBG/DotsBG";

// constants
import { ANIM_HEADER } from "@/constants/animation";

// hooks

// providers / context
import { MenuStateContext } from "@/providers/MenuStateProvider/MenuStateProvider";

// styles
import css from "./MenuMobile.module.css";

// utility
import React from "react";
import { RemoveScroll } from "react-remove-scroll";

// #endregion ===========================

const menuItems = [
  "Reserve a machine",
  "Tool library",
  "Get in touch",
  "Upload design",
];

export default function MenuMobile() {
  const { isMenuOpened, setIsMenuOpened } = React.useContext(MenuStateContext);
  const [isMobile, setIsMobile] = React.useState(true);

  // close menu on resize to desktop
  React.useEffect(() => {
    if (!window) return;

    function closeMenu() {
      if (window.innerWidth >= 1200) {
        setIsMenuOpened(false);
      }
    }

    function getDeviceWidth() {
      if (window.innerWidth >= 1200) {
        setIsMobile(false);
        console.log(window.innerWidth);
      } else {
        setIsMobile(true);
      }
    }

    getDeviceWidth();
    window.addEventListener("resize", closeMenu);
    window.addEventListener("resize", getDeviceWidth);
    return () => {
      window.removeEventListener("resize", closeMenu);
      window.removeEventListener("resize", getDeviceWidth);
    };
  }, [setIsMenuOpened]);

  const clipPathValue = isMenuOpened
    ? "inset(0% 0% 0% 0%)"
    : "inset(0% 0% 100% 0%)";

  const attributes = isMobile ? {} : { tabIndex: "-1" };

  return (
    <RemoveScroll enabled={isMenuOpened}>
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
            <IconLocation color="white" />
            Canada, Montreal
          </address>

          {/* links */}
          <nav>
            <ul className={css.container_links}>
              {menuItems.map((item, i) => (
                <li key={i}>
                  <LinkText type="mobile" {...attributes}>
                    {item}
                  </LinkText>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* bottom */}
        <div>
          <LinkText hasUnderline={false}>Eng</LinkText>
          <span className={css.divider}>/</span>
          <LinkText {...attributes}>Fra</LinkText>
        </div>
      </motion.article>
    </RemoveScroll>
  );
}
