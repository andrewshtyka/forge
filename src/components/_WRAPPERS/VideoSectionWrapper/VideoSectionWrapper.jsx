"use client";

// #region ============================== Imports

// animation
import { useScroll } from "motion/react";

// components
import VideoSection from "@/components/_SECTIONS/2_VideoSection/VideoSection";

// constants

// hooks

// providers / context

// styles
// import css from ".";

// utility
import React from "react";
import About from "@/components/_SECTIONS/3_About/About";

// #endregion ===========================

export default function VideoSectionWrapper() {
  const containerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={containerRef}
      style={{ backgroundColor: "var(--color-bg-accent)" }}
    >
      <VideoSection scrollYProgress={scrollYProgress} />
      <About />
    </div>
  );
}
