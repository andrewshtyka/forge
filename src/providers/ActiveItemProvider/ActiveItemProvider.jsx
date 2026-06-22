"use client";

// animation
import { useAnimationFrame } from "motion/react";

// constants
import { aboutListItems } from "@/data/aboutListItems";

// utility
import React from "react";

export const AboutActiveItemContext = React.createContext({
  activeId: 1,
  setActiveId: () => {},
  isTimerRunning: true,
  setIsTimerRunning: () => {},
});

const INTERVAL = 1500;

export function AboutActiveItemProvider({ children }) {
  const [activeId, setActiveId] = React.useState(1);
  const [isTimerRunning, setIsTimerRunning] = React.useState(true);
  const elapsed = React.useRef(INTERVAL);

  useAnimationFrame((_, delta) => {
    elapsed.current += delta;

    if (isTimerRunning) {
      if (elapsed.current >= INTERVAL) {
        elapsed.current = 0;

        if (activeId === aboutListItems.length) {
          setActiveId(1);
        } else {
          setActiveId((v) => v + 1);
        }
      }
    }
  });

  return (
    <AboutActiveItemContext.Provider
      value={{
        activeId,
        setActiveId,
        isTimerRunning,
        setIsTimerRunning,
      }}
    >
      {children}
    </AboutActiveItemContext.Provider>
  );
}
