// #region ============================== Imports

// animation

// assets
import img_1 from "@/assets/images/container_3_joint.webp";
import img_2 from "@/assets/images/container_1_plate.webp";
import img_3 from "@/assets/images/container_2_connector.webp";
import img_4 from "@/assets/images/container_4_shaft.webp";
import img_5 from "@/assets/images/container_5_cap.webp";

// assets
import img_title from "@/assets/images/title_details.webp";

// components
import Tag from "@/components/_NOT_INTERACTIVE/Tag/Tag";
import CardProduct from "./CardProduct/CardProduct";
import DotsBG from "@/components/_NOT_INTERACTIVE/DotsBG/DotsBG";
import CardUpload from "./CardUpload/CardUpload";
import TitleH1 from "@/components/_NOT_INTERACTIVE/TitleH1/TitleH1";

// constants

// hooks

// providers / context

// styles
import css from "./Manufacture.module.css";

// utility
import React from "react";

// #endregion ===========================

const listItems = [
  {
    key: 1,
    data: {
      title: "Spherical Joint",
      details: [
        {
          key: 1,
          title: "Material",
          text: "Steel, Stainless Steel",
        },
        {
          key: 2,
          title: "Load Capacity",
          text: "Up to 10,000 N",
        },
        {
          key: 3,
          title: "Thread",
          text: "M8 to M30",
        },
        {
          key: 4,
          title: "Bearing Type",
          text: "Ball or Plain",
        },
      ],
      img: {
        src: img_1,
        alt: "Spherical Joint",
      },
    },
  },
  {
    key: 2,
    data: {
      title: "Mounting Plate",
      details: [
        {
          key: 1,
          title: "Material",
          text: "Steel, Aluminum",
        },
        {
          key: 2,
          title: "Hole Diameter",
          text: "Up to 10,000 N",
        },
        {
          key: 3,
          title: "Vibration Damping",
          text: "Rubber Inserts",
        },
        {
          key: 4,
          title: "Mounting Style",
          text: "Horizontal, Vertical",
        },
      ],
      img: {
        src: img_2,
        alt: "Mounting Plate",
      },
    },
  },
  {
    key: 3,
    data: {
      title: "Multi-Pin Connector",
      details: [
        {
          key: 1,
          title: "Material",
          text: "Plastic, Metal",
        },
        {
          key: 2,
          title: "Pin Count",
          text: "2 to 50+ Pins",
        },
        {
          key: 3,
          title: "Waterproof Rating",
          text: "IP65/IP67",
        },
        {
          key: 4,
          title: "Locking",
          text: "Screw or Clip",
        },
      ],
      img: {
        src: img_3,
        alt: "Multi-Pin Connector",
      },
    },
  },
  {
    key: 4,
    data: {
      title: "Motor Shaft",
      details: [
        {
          key: 1,
          title: "Material",
          text: "Hardened Steel",
        },
        {
          key: 2,
          title: "Diameter",
          text: "6 mm to 50 mm",
        },
        {
          key: 3,
          title: "Keyway Type",
          text: "DIN 6885",
        },
        {
          key: 4,
          title: "Length",
          text: "50 mm to 500 mm",
        },
      ],
      img: {
        src: img_4,
        alt: "Motor Shaft",
      },
    },
  },
  {
    key: 5,
    data: {
      title: "Protective Cap",
      details: [
        {
          key: 1,
          title: "Material",
          text: "Steel, Rubber",
        },
        {
          key: 2,
          title: "Fit Type",
          text: "Snap-on, Threaded",
        },
        {
          key: 3,
          title: "Water Resistance",
          text: "IP54",
        },
        {
          key: 4,
          title: "Impact Resistance",
          text: "10 J",
        },
      ],
      img: {
        src: img_5,
        alt: "Protective Cap",
      },
    },
  },
];

const valueArr = ["The Most Popular", "img", "We Produce"];

export default function Manufacture() {
  return (
    <section className={css.section}>
      <DotsBG />

      <div className={css.top}>
        {/* tag */}
        <Tag>Manufacture</Tag>

        {/* title */}
        <div className={css.container_title}>
          <TitleH1
            tag={"h2"}
            valueArr={valueArr}
            imgSrc={img_title}
            imgAlt="Details"
            marginInline="auto"
            textAlign="center"
          />
        </div>

        {/* cards */}
        <ul className={css.container_cards}>
          {listItems.map(({ key, data }) => (
            <CardProduct key={key} data={data} />
          ))}
          <CardUpload />
        </ul>
      </div>
    </section>
  );
}
