"use client";

// #region ============================== Imports

// animation

// components
import Link from "next/link";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Image from "next/image";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";

// constants

// hooks

// providers / context

// styles
import css from "./CardProduct.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function CardProduct({ data }) {
  return (
    <li>
      <Link href="#" className={css.container}>
        {/* dots */}
        <div className={css.container_dots_top}>
          <Dot color="black" />
          <Dot color="black" />
        </div>

        <div className={css.container_dots_bottom}>
          <Dot color="black" />
          <Dot color="black" />
        </div>

        {/* top */}
        <div className={css.top}>
          <h3 className={`f_h3`}>{data.title}</h3>
          <IconArrow color="black" size="big" />
        </div>

        {/* details */}
        <ul className={css.list}>
          {data.details.map(({ key, title, text }) => (
            <li key={key} className={css.list_item}>
              <h4 className={`f_h4 ${css.list_title}`}>{title}:</h4>
              <p className={`f_h4`}>{text}</p>
            </li>
          ))}
        </ul>

        {/* img */}
        <div className={css.container_img}>
          <Image src={data.img.src} alt={data.img.alt} className={css.img} />
        </div>
      </Link>
    </li>
  );
}
