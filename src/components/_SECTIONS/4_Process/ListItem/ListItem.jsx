"use client";

// #region ============================== Imports

// animation

// components

// constants

// hooks

// providers / context

// styles
import css from "./ListItem.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function ListItem({ icon, obj }) {
  return (
    <li className={css.item}>
      <div className={css.divider}></div>

      <div className={css.container_title}>
        <div className={css.container_icon}>{icon}</div>
        <h3 className={`${css.title} f_h3`}>{obj.title}</h3>
      </div>

      <p className={`f_body ${css.text}`}>{obj.text}</p>
    </li>
  );
}
