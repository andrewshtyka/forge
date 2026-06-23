"use client";

// #region ============================== Imports

// animation
import { motion, useInView } from "motion/react";

// components
import IconLogo from "@/components/_NOT_INTERACTIVE/Icons/IconLogo/IconLogo";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Button from "@/components/_INTERACTIVE/Button/Button";
import TitleH2 from "@/components/_NOT_INTERACTIVE/TitleH2/TitleH2";

// constants

// hooks

// providers / context

// styles
import css from "./Banner.module.css";

// utility
import React from "react";
import { ANIM_BANNER_LOGO } from "@/constants/animation";

// #endregion ===========================

const valueArr = ["Ready to Bring Your Detail to Life?"];

const MotionIcon = motion.create(IconLogo);

export default function Banner() {
  const iconRef = React.useRef(null);
  const isInView = useInView(iconRef, {
    margin: "0% 0% 0% 0%",
    once: true,
  });

  return (
    <section className={css.section}>
      <span className={css.container_icon}>
        <MotionIcon
          ref={iconRef}
          size="100%"
          initial={ANIM_BANNER_LOGO.initial}
          animate={{
            scale: isInView
              ? ANIM_BANNER_LOGO.animate.end
              : ANIM_BANNER_LOGO.animate.start,
          }}
          transition={ANIM_BANNER_LOGO.transition}
        />
      </span>

      <TitleH2 valueArr={valueArr} tag="h2" />

      <div className={css.bottom}>
        <p className={`f_body ${css.text}`}>
          From prototypes to production runs – our CNC machining platform is
          built for speed, precision, and scale. Share your project with us, and
          we’ll turn your ideas into real, production-ready details.
        </p>
        <div className={css.container_btn}>
          <Button
            colorBg="white"
            type="secondary"
            icon={<IconArrow color="blue" />}
            isWide={true}
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
}
