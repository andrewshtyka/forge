import { cubicBezier } from "motion/react";

export const ANIM_HEADER = {
  button: {
    transition: 0.5,
    ease: "cubic-bezier(.25, 0, 0, 1)",
  },
  menu: {
    transition: 0.3,
    ease: [0.25, 0, 0, 1],
    headerBlendDelay: 200,
  },
};

export const ANIM_BTN_PRIMARY = {
  text: {
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.2,
    },
  },

  img: {
    transition: {
      duration: 1,
      type: "spring",
      bounce: 0.5,
    },
  },
};

export const ANIM_BTN_SECONDARY = {
  initial: {
    width: "100%",
  },
  transition_start: {
    duration: 0.75,
    type: "spring",
    bounce: 0.5,
  },
  transition_end: {
    duration: 0.3,
    ease: cubicBezier(0.5, 0, 0.3, 1),
  },
};

export const ANIM_PRODUCT_CARD = {
  initial: {
    scale: 1,
  },
  animate: {
    scale: {
      start: 1,
      end: 1.1,
    },
    rotate: {
      start: 0,
      end: -10,
    },
  },
  transition: {
    duration: 1,
    type: "spring",
    bounce: 0.5,
  },
};

export const ANIM_PRODUCT_CARD_DOTS = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    start: 0,
    end: "var(--space-2)",
  },
  transition: ANIM_PRODUCT_CARD.transition,
};

export const ANIM_PRODUCT_CARD_BG = {
  transition: {
    duration: 0.5,
    ease: cubicBezier(0.3, 0, 0, 1),
  },
};
