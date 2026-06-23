"use client";

// #region ============================== Imports

// animation
import { useInView } from "motion/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Image from "next/image";

// constants
import { MIN_PRELOADER_TIME } from "@/constants/animation";

// hooks

// providers / context

// styles
import css from "./TitleH2.module.css";

// utility
import React from "react";

// #endregion ===========================

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(ScrollTrigger);

export default function TitleH2({ tag: Tag, valueArr }) {
  const titleRef = React.useRef(null);

  useGSAP(() => {
    const el = titleRef.current;
    if (!el) return;
    const fontsReady = document.fonts.ready;

    fontsReady.then(() => {
      SplitText.create(el, {
        type: "lines",
        linesClass: "line_split",
        autoSplit: true,
        onSplit: (instance) => {
          // create bars
          instance.lines.forEach((line) => {
            const newDiv = document.createElement("div");
            newDiv.classList.add("bar");
            line.append(newDiv);
          });

          // create array of bars (for animation)
          const barsArr = instance.lines.map((line) => {
            return line.querySelector(".bar");
          });

          // set color to bars
          barsArr.forEach((bar) => {
            bar.style.backgroundColor = "var(--color-text-light)";
          });

          // create array of spans with content (for animation)
          const textsArr = instance.lines.map((line) => {
            return line.querySelectorAll("span");
          });

          // make lines and texts invisible (on start)
          gsap.set(instance.lines, { visibility: "hidden" });
          gsap.set(textsArr, { visibility: "hidden" });

          // default timeline settings
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
              invalidateOnRefresh: true,
            },
          });

          // timeline
          tl.to(instance.lines, {
            visibility: "visible",
            duration: 0,
          })
            .to(barsArr, {
              clipPath:
                "inset(0% 0% 0% 0% round var(--border-radius-tetriary))",
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
              ">0.05",
            )
            .to(
              barsArr,
              {
                clipPath:
                  "inset(0% 0% 0% 100% round var(--border-radius-tetriary))",
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
  });

  return (
    <Tag ref={titleRef} className={`f_h2 ${css.title}`}>
      {valueArr.map((el, i) => (
        <span key={i}>{el} </span>
      ))}
    </Tag>
  );
}
