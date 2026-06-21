"use client";

import React from "react";

export default function useWindowDimensions() {
  const [dimensions, setDimensions] = React.useState(getWindowDimensions);

  React.useEffect(() => {
    function handleResize() {
      setDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return dimensions;
}

function getWindowDimensions() {
  if (typeof window === "undefined") {
    return { width: 0, height: 0 };
  }
  const { innerWidth, innerHeight } = window;
  return { width: innerWidth, height: innerHeight };
}
