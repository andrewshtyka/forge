"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_easy.webp";
import img_process from "@/assets/images/img_process.webp";

// components
import Tag from "@/components/_NOT_INTERACTIVE/Tag/Tag";
import Image from "next/image";
import IconUpload from "@/components/_NOT_INTERACTIVE/Icons/IconUpload/IconUpload";
import IconCheckout from "@/components/_NOT_INTERACTIVE/Icons/IconCheckout/IconCheckout";
import IconMake from "@/components/_NOT_INTERACTIVE/Icons/IconMake/IconMake";
import IconShipped from "@/components/_NOT_INTERACTIVE/Icons/IconShipped/IconShipped";
import ListItem from "./ListItem/ListItem";
import ImageMasked from "./ImageMasked/ImageMasked";

// constants

// hooks

// providers / context

// styles
import css from "./Process.module.css";

// utility
import React from "react";

// #endregion ===========================

const listItems = [
  {
    key: 1,
    icon: <IconUpload size="100%" />,
    obj: {
      title: "Upload Step Files",
      text: "Select from a wide range of materials, precision tolerances to match your needs",
    },
  },
  {
    key: 2,
    icon: <IconCheckout size="100%" />,
    obj: {
      title: "Get a quote & checkout",
      text: "No waiting – just fast, transparent pricing and control over delivery of your parts",
    },
  },
  {
    key: 3,
    icon: <IconMake size="100%" />,
    obj: {
      title: "We make your parts",
      text: "Once you place an order, our machines get to work immediately – no delays",
    },
  },
  {
    key: 4,
    icon: <IconShipped size="100%" />,
    obj: {
      title: "Parts are shipped",
      text: "Finalized parts are out the door quickly, delivery completed within 48 hours",
    },
  },
];

export default function Process() {
  return (
    <section className={css.section}>
      <div className={css.top}>
        <Tag>Process</Tag>

        <h2 className={`f_h1 ${css.title}`}>
          Innovative Manufacturing: Fast and{" "}
          <Image src={img_title} alt="Easy" className={css.img_title} />
        </h2>
        {/* text */}
        <ul className={css.list_text}>
          {listItems.map(({ key, icon, obj }) => (
            <ListItem key={key} obj={obj} icon={icon} />
          ))}
        </ul>
      </div>

      <ImageMasked src={img_process} alt="Factory" />
    </section>
  );
}
