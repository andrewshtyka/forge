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

export default function ListItem({ children, num, icon }) {
  return (
    <li>
      <div className={css.divider}></div>

      <button type="button" className={css.item}>
        {/* left */}
        <div className={css.text}>
          <div className={css.container_num}>
            <p className="f_description">0{num}.</p>
          </div>

          <h3 className={`f_h3 ${css.title}`}>{children}</h3>
        </div>

        {/* right */}
        <div className={css.container_icon}>{icon}</div>
      </button>
    </li>
  );
}
