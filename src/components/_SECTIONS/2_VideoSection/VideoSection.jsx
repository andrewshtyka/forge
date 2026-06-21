"use client";

// #region ============================== Imports

// animation
import { AnimatePresence, motion, cubicBezier } from "motion/react";

// assets
import poster from "@/assets/images/video_poster.webp";

// components
import Image from "next/image";
import IconPlay from "@/components/_NOT_INTERACTIVE/Icons/IconPlay/IconPlay";
import IconLogo from "@/components/_NOT_INTERACTIVE/Icons/IconLogo/IconLogo";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";

// constants

// hooks
import useFollowPointer from "@/hooks/useFollowPointer";

// providers / context

// styles
import css from "./VideoSection.module.css";

// utility
import React from "react";

// #endregion ===========================

export const MotionImage = motion.create(Image);

export default function VideoSection() {
  // video
  const [isVisible, setIsVisible] = React.useState(true);
  const sectionRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const hasStartedRef = React.useRef(false);

  // button
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef(null);
  const btnRef = React.useRef(null);
  const { x, y } = useFollowPointer(btnRef, containerRef, isHovered);

  // hide poster and play youtube video
  function playVideo() {
    hasStartedRef.current = true;
    setIsVisible(false);

    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func: "playVideo", args: [] }),
      "*",
    );
  }

  // play youtube video when in viewport
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const iframe = iframeRef.current;
        if (!iframe || !iframe.contentWindow || !hasStartedRef.current) return;

        const command = entry.isIntersecting ? "playVideo" : "pauseVideo";
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: "command", func: command, args: [] }),
          "*",
        );
      },
      { threshold: 0.5 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={css.section}>
      {/* video */}
      <iframe
        ref={iframeRef}
        src="https://www.youtube.com/embed/lEyNWtM6MW4?si=ZjEbnYGTmFg-1UMD&enablejsapi=1"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        loading="lazy"
        className={css.video}
        inert={isVisible}
      />

      {/* poster */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <MotionImage
            src={poster}
            alt="Details"
            className={css.img}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
          />
        )}
      </AnimatePresence>

      {/* dots */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className={css.container_dots}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dot />
            <Dot />
          </motion.div>
        )}
      </AnimatePresence>

      {/* button wrapper - fullscreen */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.button
            ref={containerRef}
            type="button"
            className={css.button}
            onClick={playVideo}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            {/* button */}
            <motion.span
              ref={btnRef}
              className={css.content_button}
              style={{ x, y }}
              initial={{ opacity: 0, scale: 1 }}
              whileInView={{
                opacity: 1,
                transition: { duration: 0.1, delay: 0.5 },
              }}
              viewport={{ once: true }}
              exit={{ scale: 0 }}
            >
              <IconPlay />
            </motion.span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* info */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className={css.info}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <span className={`f_body ${css.time}`}>00:00</span>
            <span className={css.container_logo}>
              <IconLogo size="100%" />
              <IconLogo size="100%" />
            </span>
            <span className={`f_body ${css.time}`}>04:15</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
