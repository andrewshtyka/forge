"use client";

// animation
import { useAnimationFrame } from "motion/react";

// constants
import { aboutListItems } from "@/data/aboutListItems";

// utility
import React from "react";

const INTERVAL = 1000;

// ABOUT
export const AboutActiveItemContext = React.createContext({
  activeId: 1,
  setActiveId: () => {},
  isTimerRunning: true,
  setIsTimerRunning: () => {},
});

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
    } else {
      elapsed.current = 0;
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

// PORTFOLIO
export const PortfolioActiveItemContext = React.createContext({
  activeId: 1,
  setActiveId: () => {},
});

export function PortfolioActiveItemProvider({ children }) {
  const [activeId, setActiveId] = React.useState(1);

  return (
    <PortfolioActiveItemContext.Provider
      value={{
        activeId,
        setActiveId,
      }}
    >
      {children}
    </PortfolioActiveItemContext.Provider>
  );
}
