// icons
import IconConnector from "@/components/_NOT_INTERACTIVE/Icons/IconConnector/IconConnector";
import IconJoint from "@/components/_NOT_INTERACTIVE/Icons/IconJoint/IconJoint";
import IconPlate from "@/components/_NOT_INTERACTIVE/Icons/IconPlate/IconPlate";
import IconShaft from "@/components/_NOT_INTERACTIVE/Icons/IconShaft/IconShaft";

// images
import list_img_1 from "@/assets/images/list_img_1.webp";
import list_img_2 from "@/assets/images/list_img_2.webp";
import list_img_3 from "@/assets/images/list_img_3.webp";
import list_img_4 from "@/assets/images/list_img_4.webp";

export const aboutListItems = [
  {
    id: 1,
    text: "Mounting Plates",
    icon: <IconPlate size="100%" id={1} />,
    img: list_img_1,
  },
  {
    id: 2,
    text: "Multi-Pin Connectors",
    icon: <IconConnector size="100%" id={2} />,
    img: list_img_2,
  },
  {
    id: 3,
    text: "Spherical Joints",
    icon: <IconJoint size="100%" id={3} />,
    img: list_img_3,
  },
  {
    id: 4,
    text: "Motor Shafts",
    icon: <IconShaft size="100%" id={4} />,
    img: list_img_4,
  },
];
