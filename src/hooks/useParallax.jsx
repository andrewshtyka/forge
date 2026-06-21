"use client";

// animation
import { useScroll, useTransform } from "motion/react";

// hooks
import useWindowDimensions from "./useWindowDimensions";

/**
 * @param sectionRef - container, inside of which there's an image / video (parallaxY must be passed to its' style = {{y: parallaxY}})
 */

export default function useParallax(sectionRef) {
  const { height } = useWindowDimensions();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, height * -0.2]);

  return parallaxY;
}
