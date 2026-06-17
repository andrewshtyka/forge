"use client";

// #region ============================== Imports

// animation

// assets
import img_title from "@/assets/images/title_easy.webp";

// components
import Tag from "@/components/Tag/Tag";
import Image from "next/image";
import IconUpload from "@/components/Icons/IconUpload/IconUpload";
import IconCheckout from "@/components/Icons/IconCheckout/IconCheckout";
import IconMake from "@/components/Icons/IconMake/IconMake";
import IconShipped from "@/components/Icons/IconShipped/IconShipped";
import ListItem from "./ListItem/ListItem";

// constants

// hooks

// providers / context

// styles
import css from "./Process.module.css";

// utility
import React from "react";
import DotsBG from "@/components/DotsBG/DotsBG";

// #endregion ===========================

const listItems = [
  {
    key: 1,
    icon: <IconUpload size="100%" />,
    obj: {
      title: "Upload Step Files",
      text: "Select from a wide range of materials, precision tolerances, and custom threads to match your needs",
    },
  },
  {
    key: 2,
    icon: <IconCheckout size="100%" />,
    obj: {
      title: "Get a quote & checkout",
      text: "No waiting – just fast, transparent pricing and control over how soon you want your parts delivered",
    },
  },
  {
    key: 3,
    icon: <IconMake size="100%" />,
    obj: {
      title: "We make your parts",
      text: "Once you place an order, our machines get to work immediately – no delays, no bottlenecks",
    },
  },
  {
    key: 4,
    icon: <IconShipped size="100%" />,
    obj: {
      title: "Parts are shipped",
      text: "Finalized parts are out the door quickly, with delivery typically completed within the upcoming 48 hours",
    },
  },
];

export default function Process() {
  return (
    <section className={css.section}>
      <Tag>Process</Tag>

      <h2 className={`f_h1 ${css.title}`}>
        Revolutionizing Manufacturing with Speed and{" "}
        <Image src={img_title} alt="CNC" className={css.img_title} />
      </h2>

      {/* text */}
      <ul className={css.list_text}>
        {listItems.map(({ key, icon, obj }) => (
          <ListItem key={key} obj={obj} icon={icon} />
        ))}
      </ul>
    </section>
  );
}
