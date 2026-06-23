"use client";

import React from "react";

export const PreloaderContext = React.createContext({
  isVisible: false,
  setIsVisible: () => {},
});

export function PreloaderProvider({ children }) {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    if (isVisible) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <PreloaderContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </PreloaderContext.Provider>
  );
}
