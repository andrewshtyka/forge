"use client";

// #region ============================== Imports

// animation

// components
import Link from "next/link";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Divider from "@/components/_NOT_INTERACTIVE/Divider/Divider";

// constants

// hooks

// providers / context

// styles
import css from "./ListItemMob.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ListItemMob({ title, text, isLast }) {
  return (
    <li>
      <Link href="#" className={css.item}>
        <span className={css.container_text}>
          <h3 className={`f_h3 ${css.title}`}>{title}</h3>
          <p className={`f_description f_uppercase ${css.text}`}>{text}</p>
        </span>

        <IconArrow color="white" size="big" />
      </Link>

      {isLast && <Divider colorBg="black" />}
    </li>
  );
}
