"use client";

// #region ============================== Imports

// animation

// components
import IconLogo from "@/components/_NOT_INTERACTIVE/Icons/IconLogo/IconLogo";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Button from "@/components/_INTERACTIVE/Button/Button";

// constants

// hooks

// providers / context

// styles
import css from "./Banner.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Banner() {
  return (
    <section className={css.section}>
      <span className={css.container_icon}>
        <IconLogo size="100%" />
      </span>

      <h2 className={`f_h2 ${css.title}`}>
        Ready to Bring Your Detail to Life?
      </h2>
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
