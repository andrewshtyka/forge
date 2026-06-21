"use client";

// #region ============================== Imports

// animation

// components
import IconDetail from "@/components/_NOT_INTERACTIVE/Icons/IconDetail/IconDetail";
import CornerLine from "@/components/_NOT_INTERACTIVE/Icons/CornerLine/CornerLine";
import Link from "next/link";

// constants

// hooks

// providers / context

// styles
import css from "./CardUpload.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function CardUpload() {
  return (
    <li>
      <Link href="#" className={css.container}>
        <div className={css.inner}>
          {/* corners */}
          <CornerLine style={{ position: "absolute", top: 0, left: 0 }} />
          <CornerLine
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              transform: "scaleX(-1)",
            }}
          />
          <CornerLine
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transform: "rotate(-90deg)",
            }}
          />
          <CornerLine
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "scale(-1, -1)",
            }}
          />

          {/* title */}
          <h4 className={`f_h2 ${css.title}`}>Send Us Your 3D Design</h4>
          {/* icon */}
          <div className={css.container_icon}>
            <IconDetail size="100%" />
          </div>
          {/* text */}
          <div className={css.bottom}>
            <p className={`f_description f_uppercase ${css.subtitle}`}>
              Supported formats
            </p>
            <p className={`f_h3`}>IGES / STL / FBX / STEP</p>
          </div>
        </div>
      </Link>
    </li>
  );
}
