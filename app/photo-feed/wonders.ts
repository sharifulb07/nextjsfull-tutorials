import { StaticImageData } from "next/image";

import one from "./photo/1.jpg";
import two from "./photo/2.jpg";
import three from "./photo/3.jpg";
import four from "./photo/4.jpg";
import five from "./photo/5.jpg";
import six from "./photo/6.jpg";
import seven from "./photo/7.jpg";
import eight from "./photo/8.jpg";
import nine from "./photo/9.jpg";
import ten from "./photo/10.jpg";

export interface ImageProps {
  id: string;
  src: StaticImageData | string;
  title: string;
}

export const photos: ImageProps[] = [
  { id: "1", src: one, title: "mountain" },
  { id: "2", src: two, title: "mountain" },
  { id: "3", src: three, title: "mountain" },
  { id: "4", src: four, title: "mountain" },
  { id: "5", src: five, title: "mountain" },
  { id: "6", src: six, title: "mountain" },
  { id: "7", src: seven, title: "mountain" },
  { id: "8", src: eight, title: "mountain" },
  { id: "9", src: nine, title: "mountain" },
  { id: "10", src: ten, title: "mountain" },
];
