"use client";

import React from "react";

export const MenuStateContext = React.createContext({
  isMenuOpened: false,
  setIsMenuOpened: () => {},
});

export function MenuStateProvider({ children }) {
  const [isMenuOpened, setIsMenuOpened] = React.useState(false);

  return (
    <MenuStateContext.Provider value={{ isMenuOpened, setIsMenuOpened }}>
      {children}
    </MenuStateContext.Provider>
  );
}
