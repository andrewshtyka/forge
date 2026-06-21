// animation
import { frame, useSpring } from "motion/react";

// utility
import React from "react";

const spring = { damping: 10, stiffness: 100, restDelta: 1 };

export default function useFollowPointer(btnRef, containerRef, isHovered) {
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  // function to center button
  const setCenter = React.useCallback(() => {
    if (!btnRef.current || !containerRef.current) return;

    const { width: containerWidth, height: containerHeight } =
      containerRef.current.getBoundingClientRect();
    const { width: btnWidth, height: btnHeight } =
      btnRef.current.getBoundingClientRect();

    frame.read(() => {
      x.set(containerWidth / 2 - btnWidth / 2);
      y.set(containerHeight / 2 - btnHeight / 2);
    });
  }, [btnRef, containerRef, x, y]);

  // center button - on mount
  React.useEffect(() => {
    setCenter();
    window.addEventListener("resize", setCenter);
    return () => window.removeEventListener("resize", setCenter);
  }, [setCenter]);

  // center button - when pointer leaves container
  React.useEffect(() => {
    if (!isHovered) setCenter();
  }, [isHovered, setCenter]);

  // button follows cursor - when isHovered
  React.useEffect(() => {
    if (!isHovered) return;

    const container = containerRef.current;
    const element = btnRef.current;
    if (!container || !element) return;

    const handlePointerMove = (e) => {
      const { clientX, clientY } = e;
      const { left: containerLeft, top: containerTop } =
        container.getBoundingClientRect();
      const { width: btnWidth, height: btnHeight } =
        element.getBoundingClientRect();

      const positionX = clientX - containerLeft - btnWidth / 2;
      const positionY = clientY - containerTop - btnHeight / 2;

      frame.read(() => {
        x.set(positionX);
        y.set(positionY);
      });
    };

    container.addEventListener("pointermove", handlePointerMove);
    return () =>
      container.removeEventListener("pointermove", handlePointerMove);
  }, [isHovered, x, y, btnRef, containerRef]);

  return { x, y };
}
