"use client";

// #region ============================== Imports

// assets
import img_1 from "@/assets/images/container_1_plate.webp";
import img_2 from "@/assets/images/container_2_connector.webp";
import img_3 from "@/assets/images/container_5_cap.webp";
import img_4 from "@/assets/images/container_3_joint.webp";
import img_5 from "@/assets/images/container_4_shaft.webp";

// animation
import { motion, useAnimationFrame, cubicBezier } from "motion/react";

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

export const MotionImage = motion.create(Image);

const images = [
  { key: 1, src: img_1 },
  { key: 2, src: img_2 },
  { key: 3, src: img_3 },
  { key: 4, src: img_4 },
  { key: 5, src: img_5 },
  { key: 6, src: img_1 },
  { key: 7, src: img_2 },
  { key: 8, src: img_3 },
  { key: 9, src: img_4 },
  { key: 10, src: img_5 },
];

const INTERVAL = 1500;

export default function Sequence() {
  const [orderArr, setOrderArr] = React.useState(() =>
    images.map((img) => img.key),
  );
  const elapsed = React.useRef(INTERVAL);

  // puts item from first to last container
  useAnimationFrame((_, delta) => {
    elapsed.current += delta;

    if (elapsed.current >= INTERVAL) {
      elapsed.current = 0;
      setOrderArr((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });
    }
  });

  return (
    <>
      {images.map((_, index) => {
        const containerKey = index + 1;
        const imgKey = orderArr[index];
        const src = images[imgKey - 1].src;

        const target = getImageAnimationStyles(containerKey);

        return (
          <li key={containerKey} className={css.container}>
            <MotionImage
              key={imgKey}
              layoutId={`image-${imgKey}`}
              layout={true}
              src={src}
              alt="Detail"
              className={css.img}
              loading="eager"
              style={{ ...target.style }}
              transition={{ ...target.transition }}
            />
          </li>
        );
      })}
    </>
  );
}

// styles for animation
function getImageAnimationStyles(containerKey) {
  const isMiddle = containerKey === 6;
  const isFirstNearMiddle = containerKey === 5 || containerKey === 7;
  const isSecondNearMiddle = containerKey === 4 || containerKey === 8;
  const isThirdNearMiddle = containerKey === 3 || containerKey === 9;
  const isHidden =
    containerKey === 1 || containerKey === 2 || containerKey === 10;

  const transition = { ease: cubicBezier(0.5, 0, 0.3, 1), duration: 1.5 };

  if (isMiddle)
    return {
      style: { scale: 1, opacity: 1, rotate: -20 },
      transition,
    };

  if (isFirstNearMiddle)
    return {
      style: { scale: 0.75, opacity: 1 },
      transition,
    };

  if (isSecondNearMiddle)
    return {
      style: { scale: 0.6, opacity: 1, rotate: 20 },
      transition,
    };

  if (isThirdNearMiddle)
    return {
      style: { scale: 0.4, opacity: 1, rotate: 40 },
      transition,
    };

  if (isHidden)
    return {
      style: { scale: 0.2, opacity: 0, rotate: 60 },
      transition,
    };
}
