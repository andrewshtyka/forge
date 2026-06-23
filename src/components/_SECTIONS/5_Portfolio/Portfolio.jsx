// #region ============================== Imports

// animation
import { motion } from "motion/react";

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
import TitleH1 from "@/components/_NOT_INTERACTIVE/TitleH1/TitleH1";

// constants
import { portfolioListItems } from "@/data/portfolioListItems";

// hooks

// providers / context

// styles
import css from "./Portfolio.module.css";

// utility
import React from "react";

// #endregion ===========================

const valueArr = ["Check Our Latest", "img"];

export default function Portfolio() {
  return (
    <section className={css.section}>
      <Tag>Portfolio</Tag>

      <div className={css.container_title}>
        <TitleH1
          tag={"h2"}
          valueArr={valueArr}
          imgSrc={img_title}
          imgAlt="Works"
          maxWidth="10ch"
          color="white"
        />
      </div>

      <span className={css.desktop}>
        <Divider colorBg="black" />
      </span>

      {/* mobile */}
      <ul className={css.list_mob}>
        {portfolioListItems.map(({ id, title, text }) => {
          const maxAmount = 7;
          if (id > maxAmount) return;

          return (
            <ListItemMob
              key={id}
              title={title}
              text={text}
              isLast={id === maxAmount}
            />
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
          {portfolioListItems.map(({ id, title, text }) => (
            <ListItemDesktop
              key={id}
              title={title}
              text={text}
              isLast={id === portfolioListItems.length}
              id={id}
            />
          ))}
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
