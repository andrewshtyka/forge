"use client";

// #region ============================== Imports

// assets
import img_1 from "@/assets/images/container_1_plate.webp";
import img_2 from "@/assets/images/container_2_connector.webp";
import img_3 from "@/assets/images/container_5_cap.webp";
import img_4 from "@/assets/images/container_3_joint.webp";
import img_5 from "@/assets/images/container_4_shaft.webp";

// animation

// components
import Image from "next/image";

// constants

// hooks

// providers / context

// styles
import css from "./Sequence.module.css";

// utility
import React from "react";

// #endregion ===========================

export default function Sequence() {
  const images = [
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
    img_1,
    img_2,
    img_3,
    img_4,
    img_5,
  ];

  return (
    <>
      {images.map((src, i) => (
        <Image key={i} src={src} alt="Detail" className={css.img} />
      ))}
    </>
  );
}
