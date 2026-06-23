// #region ============================== Imports

// animation

// components
import Dot from "@/components/_NOT_INTERACTIVE/Dot/Dot";
import LinkText from "@/components/_INTERACTIVE/LinkText/LinkText";

// constants

// hooks

// providers / context

// styles
import css from "./Footer.module.css";

// utility
import React from "react";

// #endregion ===========================

const links = {
  lazarev: {
    title: "Lazarev Agency",
    website: "https://www.lazarev.agency/",
    linkedin: "https://www.linkedin.com/company/lazarevagency/",
  },
  shtyka: {
    title: "Andrew Shtyka",
    website: "https://shtyka-portfolio.vercel.app/",
    linkedin: "https://www.linkedin.com/in/andrewshtyka/",
  },
  danylo: {
    title: "Danylo Dubrovskyi",
    linkedin: "https://www.linkedin.com/in/dubrovskydesign/",
  },
};

export default function Footer() {
  return (
    <footer className={css.footer}>
      <div className={css.content}>
        {/* dots */}
        <div className={css.container_dots}>
          <Dot />
          <Dot />
        </div>

        {/* info */}
        <div className={css.info}>
          {/* top */}
          <div className={css.top}>
            <div>
              <h3 className={`f_description f_uppercase ${css.title}`}>
                Design
              </h3>
              <LinkText el="a" color="white" href={links.lazarev.website}>
                {links.lazarev.title}
              </LinkText>
            </div>
            <div className={css.container_development}>
              <h3 className={`f_description f_uppercase ${css.title}`}>
                Development
              </h3>
              <LinkText el="a" color="white" href={links.shtyka.website}>
                {links.shtyka.title}
              </LinkText>
            </div>
          </div>

          {/* text */}
          <p className={`f_body ${css.text}`}>
            Current design is a concept, made by me –{" "}
            <LinkText el="a" color="white" href={links.shtyka.linkedin}>
              {links.shtyka.title}
            </LinkText>
            , and{" "}
            <LinkText el="a" color="white" href={links.danylo.linkedin}>
              {links.danylo.title}
            </LinkText>{" "}
            for{" "}
            <LinkText el="a" color="white" href={links.lazarev.linkedin}>
              {links.lazarev.title}
            </LinkText>{" "}
            in Apr 2025. A year later I decided to transform a static design
            into an interactive webpage with React, Next.js and Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
