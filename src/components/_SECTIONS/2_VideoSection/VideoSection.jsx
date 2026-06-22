"use client";

// #region ============================== Imports

// animation
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

// assets
import poster from "@/assets/images/video_poster.webp";

// components
import Image from "next/image";
import IconLogo from "@/components/_NOT_INTERACTIVE/Icons/IconLogo/IconLogo";
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";
import ButtonFullScreen from "./ButtonFullScreen/ButtonFullScreen";

// constants

// hooks
import useWindowDimensions from "@/hooks/useWindowDimensions";

// providers / context

// styles
import css from "./VideoSection.module.css";

// utility
import React from "react";
import useParallax from "@/hooks/useParallax";

// #endregion ===========================

const MotionImage = motion.create(Image);

export default function VideoSection() {
  const [isVisible, setIsVisible] = React.useState(true);
  const sectionRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const hasStartedRef = React.useRef(false);

  // video parallax
  const parallaxY = useParallax(sectionRef);

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
        inert={isVisible} // removes focus from youtube iframe if poster is visible
      />

      {/* poster */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <MotionImage
            src={poster}
            alt="Details"
            loading="lazy"
            className={css.img}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.75 }}
            style={{ y: parallaxY }}
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
        {isVisible && <ButtonFullScreen onClick={playVideo} />}
      </AnimatePresence>

      {/* info */}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            className={css.info}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* time - left */}
            <span className={`f_body ${css.time}`}>
              00
              <span className={css.time_divider}>:</span>
              00
            </span>

            {/* dots */}
            <span className={css.container_logo}>
              <span className={css.icon_left}>
                <IconLogo size="100%" isRotatingRight={true} />
              </span>
              <span className={css.icon_right}>
                <IconLogo size="100%" isRotatingLeft={true} />
              </span>
            </span>

            {/* time - right */}
            <span className={`f_body ${css.time}`}>
              04
              <span className={css.time_divider}>:</span>
              15
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
