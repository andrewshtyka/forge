"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_precision.webp";
import list_img_1 from "@/assets/images/list_img_1.webp";
import list_img_2 from "@/assets/images/list_img_2.webp";
import list_img_3 from "@/assets/images/list_img_3.webp";
import list_img_4 from "@/assets/images/list_img_4.webp";

// components
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import ListItem from "./ListItem/ListItem";
import IconPlate from "@/components/Icons/IconPlate/IconPlate";
import IconConnector from "@/components/Icons/IconConnector/IconConnector";
import IconJoint from "@/components/Icons/IconJoint/IconJoint";
import IconShaft from "@/components/Icons/IconShaft/IconShaft";
import Dot from "@/components/Dot/Dot";
import Quote from "./Quote/Quote";

// constants

// hooks

// providers / context

// styles
import css from "./About.module.css";

// utility
import React from "react";

// #endregion ===========================

const listItems = [
  {
    text: "Mounting Plates",
    key: 1,
    icon: <IconPlate size="100%" />,
  },
  {
    text: "Multi-Pin Connectors",
    key: 2,
    icon: <IconConnector size="100%" />,
  },
  {
    text: "Spherical Joints",
    key: 3,
    icon: <IconJoint size="100%" />,
  },
  {
    text: "Motor Shafts",
    key: 4,
    icon: <IconShaft size="100%" />,
  },
];

export default function About() {
  return (
    <section className={`grid ${css.section}`}>
      {/* tag */}
      <div className={css.container_tag}>
        <Tag>About</Tag>
      </div>

      {/* left part */}
      <div className={css.content_left}>
        {/* title */}
        <h2 className={`f_h1 ${css.title}`}>
          Revolutionizing Manufacturing with Speed and{" "}
          <Image src={img_title} alt="CNC" className={css.img_title} />
        </h2>

        {/* text */}
        <ul className={css.list_text}>
          {listItems.map(({ text, key, icon }) => (
            <ListItem key={key} num={key} icon={icon}>
              {text}
            </ListItem>
          ))}
        </ul>

        {/* images */}
        <div className={css.container_img}>
          <div className={css.container_dots_top}>
            <Dot />
            <Dot />
          </div>
          <Image src={list_img_1} alt="Detail" className={css.img} />
          <div className={css.container_dots_bottom}>
            <Dot />
            <Dot />
          </div>
        </div>
      </div>

      {/* right part */}
      <div className={css.content_right}>
        <Quote />
      </div>
    </section>
  );
}
