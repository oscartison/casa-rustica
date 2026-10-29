import { StaticImageData } from "next/image";

import Image1 from "../../app/images/house/1.webp";
import Image2 from "../../app/images/house/2.webp";
import Image3 from "../../app/images/house/3.webp";
import Image4 from "../../app/images/house/4.webp";
import Image5 from "../../app/images/house/5.webp";
import Image6 from "../../app/images/house/6.webp";
import Image7 from "../../app/images/house/7.webp";
import Image8 from "../../app/images/house/8.webp";
import Image8a from "../../app/images/house/8a.webp";
import Image8b from "../../app/images/house/8b.webp";
import Image9 from "../../app/images/house/9.webp";
import Image9a from "../../app/images/house/9a.webp";
import Image10 from "../../app/images/house/10.webp";
import Image11 from "../../app/images/house/11.webp";
import Image12 from "../../app/images/house/12.webp";
import Image13 from "../../app/images/house/13.webp";
import Image14 from "../../app/images/house/14.webp";
import Image15 from "../../app/images/house/15.webp";
import Image16 from "../../app/images/house/16.webp";
import Image17 from "../../app/images/house/17.webp";
import Image17a from "../../app/images/house/17a.webp";
import Image18 from "../../app/images/house/18.webp";
import Image18a from "../../app/images/house/18a.webp";
import Image19 from "../../app/images/house/19.webp";

export type GalleryCategory = {
  // translation key in the "pictures" namespace
  key: string;
  images: StaticImageData[];
};

export const galleryCategories: GalleryCategory[] = [
  { key: "outside", images: [Image1, Image8b, Image2] },
  { key: "living", images: [Image6, Image3, Image7, Image5, Image4, Image8, Image9] },
  { key: "bedrooms", images: [Image11, Image10, Image14, Image15, Image17, Image17a, Image12, Image13] },
  { key: "bathrooms", images: [Image19, Image9a, Image16, Image18, Image8a, Image18a] }
];
