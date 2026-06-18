"use client";

// #region ============================== Imports

// animation

// components
import Link from "next/link";
import IconArrow from "@/components/Icons/IconArrow/IconArrow";
import Divider from "@/components/Divider/Divider";

// constants

// hooks

// providers / context

// styles
import css from "./ListItemDesktop.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ListItemDesktop({ title, text, isFirst, isLast }) {
  let borderTop;
  if (!isFirst) borderTop = "var(--space-px) solid var(--color-gray-200)";

  return (
    <li>
      <Link href="#" className={css.item} style={{ borderTop }}>
        <span className={css.container_icon}>
          <IconArrow color="white" size="big" />
        </span>

        <h3 className={`f_h3 ${css.title}`}>{title}</h3>
        <p className={`f_description f_uppercase ${css.text}`}>{text}</p>
      </Link>

      {isLast && <Divider colorBg="black" />}
    </li>
  );
}
