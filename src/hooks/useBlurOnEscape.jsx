import React from "react";

export default function useBlurOnEscape() {
  React.useEffect(() => {
    function handleEscape(e) {
      if (e.code === "Escape") {
        if (!document.activeElement) return;
        document.activeElement?.blur();
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
}
