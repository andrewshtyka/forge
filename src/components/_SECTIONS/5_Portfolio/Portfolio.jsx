"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_works.webp";
import img_icon from "@/assets/images/mesh.webp";

// components
import Tag from "@/components/_NOT_INTERACTIVE/Tag/Tag";
import Image from "next/image";
import ListItemMob from "./ListItemMob/ListItemMob";
import ListItemDesktop from "./ListItemDesktop/ListItemDesktop";
import Divider from "@/components/_NOT_INTERACTIVE/Divider/Divider";
import Button from "@/components/_INTERACTIVE/Button/Button";
import IconArrow from "@/components/_NOT_INTERACTIVE/Icons/IconArrow/IconArrow";
import Images from "./Images/Images";

// constants

// hooks

// providers / context

// styles
import css from "./Portfolio.module.css";

// utility
import React from "react";

// #endregion ===========================

const listItems = [
  {
    title: "Electric Bicycle",
    text: "Motor mounts",
  },
  {
    title: "Prefab Home",
    text: "Metal components",
  },
  {
    title: "Mechanical Watch",
    text: "Spacer rings",
  },
  {
    title: "3D Printer",
    text: "Threaded adapters",
  },
  {
    title: "Drone",
    text: "Custom brackets",
  },
  {
    title: "Motorcycle",
    text: "Gear components",
  },
  {
    title: "Robotic Arm",
    text: "Shafts",
  },
  {
    title: "Electric Skateboard",
    text: "Bushings",
  },
  {
    title: "CNC Router",
    text: "Couplings",
  },
  {
    title: "Camera Gimbal",
    text: "Heat sinks",
  },
  {
    title: "Hydraulic Press",
    text: "Valve bodies",
  },
  {
    title: "Race Car",
    text: "Mounting plates",
  },
  {
    title: "Medical Imaging Device",
    text: "Pulleys",
  },
  {
    title: "Industrial Conveyor System",
    text: "Tool holders",
  },
  {
    title: "Smart Coffee Machine",
    text: "Flanges",
  },
  {
    title: "Satellite System",
    text: "Manifolds",
  },
  {
    title: "RC Airplane",
    text: "Rotor hubs",
  },
];

export default function Portfolio() {
  return (
    <section className={css.section}>
      <Tag>Portfolio</Tag>

      <h2 className={`f_h1 ${css.title}`}>
        Check Our Latest{" "}
        <Image src={img_title} alt="Works" className={css.img_title} />
      </h2>

      <span className={css.desktop}>
        <Divider colorBg="black" />
      </span>

      {/* mobile */}
      <ul className={css.list_mob}>
        {listItems.map(({ title, text }, i) => {
          const maxAmount = 7;
          if (i > maxAmount - 1) return;

          let isLast = false;
          if (i === maxAmount - 1) isLast = true;

          return (
            <ListItemMob key={i} title={title} text={text} isLast={isLast} />
          );
        })}
      </ul>

      {/* desktop */}
      <div className={`grid ${css.container_list}`}>
        {/* images */}
        <div className={css.container_images}>
          <Images />
        </div>

        {/* list */}
        <ul className={css.list_desktop}>
          {listItems.map(({ title, text }, i) => {
            let isFirst = false;
            if (i === 0) isFirst = true;
            let isLast = false;
            if (i === listItems.length - 1) isLast = true;

            return (
              <ListItemDesktop
                key={i}
                title={title}
                text={text}
                isFirst={isFirst}
                isLast={isLast}
              />
            );
          })}
        </ul>

        {/* text */}
        <p className={`f_body ${css.info}`}>More in the vault. Take a look.</p>

        {/* button */}
        <span className={css.container_button}>
          <Button
            colorBg="white"
            isTextBlack={true}
            icon={<IconArrow color="black" />}
            img={<Image src={img_icon} alt="mesh" />}
            isWide={true}
          >
            See more
          </Button>
        </span>
      </div>
    </section>
  );
}
