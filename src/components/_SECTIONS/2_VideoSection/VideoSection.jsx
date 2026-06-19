"use client";

// #region ============================== Imports

// animation

// assets
import poster from "@/assets/images/video_poster.webp";

// components
import Image from "next/image";
import IconPlay from "@/components/Icons/IconPlay/IconPlay";
import IconLogo from "@/components/Icons/IconLogo/IconLogo";

// constants

// hooks

// providers / context

// styles
import css from "./VideoSection.module.css";

// utility
import React from "react";
import { div } from "motion/react-client";
import Dot from "@/components/Dot/Dot";

// #endregion ===========================

export default function VideoSection() {
  const [isVisible, setIsVisible] = React.useState(true);
  const sectionRef = React.useRef(null);
  const iframeRef = React.useRef(null);
  const hasStartedRef = React.useRef(false);

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
      />

      {/* poster */}
      {isVisible && <Image src={poster} alt="Details" className={css.img} />}

      {/* dots */}
      {isVisible && (
        <div className={css.container_dots}>
          <Dot />
          <Dot />
        </div>
      )}

      {/* button wrapper - fullscreen */}
      {isVisible && (
        <button type="button" className={css.button} onClick={playVideo}>
          {/* button */}
          <span className={css.content_button}>
            <IconPlay />
          </span>
        </button>
      )}

      {/* info */}
      {isVisible && (
        <div className={css.info}>
          <span className={`f_body ${css.time}`}>00:00</span>
          <span className={css.container_logo}>
            <IconLogo size="100%" />
            <IconLogo size="100%" />
          </span>
          <span className={`f_body ${css.time}`}>04:15</span>
        </div>
      )}
    </section>
  );
}
