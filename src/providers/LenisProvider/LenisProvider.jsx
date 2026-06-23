"use client";

import Lenis from "lenis";
import React from "react";

const LenisContext = React.createContext(null);

export function LenisProvider({ children }) {
  const [lenis] = React.useState(() =>
    typeof window !== "undefined" ? new Lenis() : null,
  );
  const idRef = React.useRef(null);

  React.useEffect(() => {
    if (!lenis) return;

    function raf(time) {
      lenis.raf(time);
      idRef.current = requestAnimationFrame(raf);
    }
    idRef.current = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(idRef.current);
      lenis.destroy();
    };
  }, [lenis]);

  return (
    <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
  );
}

export function useLenis() {
  return React.useContext(LenisContext);
}
