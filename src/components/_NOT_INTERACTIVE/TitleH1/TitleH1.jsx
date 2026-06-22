"use client";

// #region ============================== Imports

// animation
import { animate, inView, stagger } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Image from "next/image";

// constants

// hooks

// providers / context

// styles
import css from "./TitleH1.module.css";

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function TitleH1({
  tag: Tag,
  valueArr,
  imgSrc,
  imgAlt,
  textAlign = "left",
  marginInline = "0",
  maxWidth = "15ch",
  hasDescender = false,
  color = "black",
}) {
  const titleRef = React.useRef(null);

  useGSAP(
    () => {
      const el = titleRef.current;

      const images = Array.from(el.querySelectorAll("img"));
      const imgPromises = images.map((img) =>
        img.complete
          ? Promise.resolve()
          : new Promise((res) => {
              img.onload = res;
              img.onerror = res;
            }),
      );

      Promise.all([document.fonts.ready, ...imgPromises]).then(() => {
        SplitText.create(el, {
          type: "lines",
          linesClass: "line_split",
          autoSplit: true,
          onSplit: (instance) => {
            instance.lines.forEach((line) => {
              const newDiv = document.createElement("div");
              newDiv.classList.add("bar");
              line.append(newDiv);
            });

            const barsArr = instance.lines.map((line) => {
              return line.querySelector(".bar");
            });

            const textsArr = instance.lines.map((line) => {
              return line.querySelectorAll("span");
            });

            gsap.set(instance.lines, { visibility: "hidden" });
            gsap.set(textsArr, { visibility: "hidden" });

            // instance.lines
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: el,
                start: "top bottom",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
            });

            tl.to(instance.lines, {
              visibility: "visible",
              duration: 0,
            })
              .to(barsArr, {
                x: "100%",
                duration: 0.75,
                stagger: 0.15,
                ease: "power2.inOut",
              })
              .to(
                textsArr,
                {
                  visibility: "visible",
                  duration: 0,
                },
                ">-0.15",
              )
              .to(
                barsArr,
                {
                  x: "210%",
                  duration: 0.75,
                  stagger: 0.15,
                  ease: "power2.out",
                },
                ">-0.05",
              );

            return tl;
          },
        });

        requestAnimationFrame(() => ScrollTrigger.refresh());
      });
    },
    { scope: titleRef },
  );

  const appliedClass = hasDescender ? css.has_descender : css.no_descender;

  let appliedColor;
  if (color === "black") appliedColor = "var(--color-text-dark)";
  else if (color === "white") appliedColor = "var(--color-text-light)";

  let appliedAlignClass;
  if (textAlign === "center") {
    appliedAlignClass = "u_center";
  } else {
    appliedAlignClass = " ";
  }

  return (
    <Tag
      ref={titleRef}
      className={`f_h1 ${appliedAlignClass}`}
      style={{
        textAlign,
        marginInline,
        maxWidth,
        color: appliedColor,
        visibility: "hidden",
      }}
    >
      {valueArr.map((el, i) => {
        // img
        if (el === "img") {
          return (
            <span key={i}>
              <Image src={imgSrc} alt={imgAlt} className={appliedClass} />{" "}
            </span>
          );
        }
        // text
        else {
          return <span key={i}>{el} </span>;
        }
      })}
    </Tag>
  );
}
