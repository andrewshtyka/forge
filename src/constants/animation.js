import { cubicBezier } from "motion/react";

// Constants
export const MIN_PRELOADER_TIME = 1000;
export const DELAY_BEFORE_SCROLLABLE = 400;

// Motion variants

export const ANIM_ABOUT_LIST_ITEM = {
  arrow: {
    initial: {
      top: "-50%",
      left: "calc(-100% + var(--space-2))",
    },
    animate: {
      start: 0,
      end: "calc(100% - var(--space-2))",
    },
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.3, 0, 0, 1),
    },
  },

  text: {
    initial: {
      color: "var(--color-text-dark)",
    },
    animate: {
      start: "var(--color-text-dark)",
      end: "var(--color-text-accent-primary)",
    },
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.3, 0, 0, 1),
    },
  },

  icon: {
    initial: {
      fill: "var(--color-text-dark)",
    },
    animate: {
      start: "var(--color-text-dark)",
      end: "var(--color-text-accent-primary)",
    },
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.3, 0, 0, 1),
    },
  },

  image: {
    initial: {
      opacity: 0,
    },
    animate: {
      start: 0,
      end: 1,
    },
    transition: {
      duration: 0.5,
      ease: cubicBezier(0.3, 0, 0.3, 1),
    },
  },
};

export const ANIM_BANNER_LOGO = {
  initial: {
    scale: 0,
  },
  animate: {
    start: 0,
    end: 1,
  },
  transition: {
    duration: 1.5,
    ease: cubicBezier(0.3, 0, 0, 1),
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

export const ANIM_HEADER = {
  button: {
    transition: 0.5,
    ease: "cubic-bezier(.25, 0, 0, 1)", // for CSS style
  },
  menu: {
    transition: 0.3,
    ease: cubicBezier(0.25, 0, 0, 1),
    headerBlendDelay: 200,
  },
  layout: {
    initial: { y: "-100%" },
    animate: {
      start: 0,
      end: "-100%",
    },
    transition: {
      delay: 0.25,
      duration: 1.5,
      type: "spring",
      bounce: 0.3,
    },
  },
};

export const ANIM_PORTFOLIO_LIST_ITEM = {
  initial: {
    x: 0,
    color: "var(--color-text-gray)",
  },

  animate: {
    position: {
      start: 0,
      end: "calc(var(--offset-primary) * 2)",
    },
    color: {
      start: "var(--color-text-gray)",
      end: "var(--color-text-light)",
    },
  },

  transition: {
    start: {
      duration: 0.3,
      ease: cubicBezier(0.3, 0, 0.3, 1),
    },
    end: {
      duration: 0.5,
      type: "spring",
      bounce: 0.3,
    },
  },
};

export const ANIM_PRELOADER = {
  preloaderMask: {
    initial: {
      maskSize: "0vmax",
    },
    animate: {
      rotate: 360,
      maskSize: "4vmax",
    },
    transition: {
      duration: 1,
      ease: cubicBezier(0.25, 0, 0, 1),
    },
  },

  wrapperMask: {
    initial: {
      maskSize: "4vmax",
    },
    animate: {
      start: "4vmax",
      end: "1000vmax",
    },
    transition: {
      start: {
        duration: 0.8,
      },
      end: {
        duration: 3,
      },
      ease: cubicBezier(0.25, 0, 0, 1),
    },
  },

  bg: {
    initial: {
      opacity: 1,
    },
    exit: {
      opacity: 0,
    },
    transition: {
      duration: 0,
    },
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

export const ANIM_TAG = {
  initial: {
    clipPath: "inset(0% 100% 0% 0% round var(--border-radius-secondary))",
  },
  animate: {
    end: "inset(0% 0% 0% 0% round var(--border-radius-secondary))",
    start: "inset(0% 100% 0% 0% round var(--border-radius-secondary))",
  },
  transition: {
    duration: 1,
    ease: cubicBezier(0.3, 0, 0, 1),
  },
};
