import { FaCarSide } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { TbCarSuvFilled } from "react-icons/tb";

import SuvImage from "@/public/images/categories/suv.jpg";
import SedanImage from "@/public/images/categories/sedan.jpg";
import CoupeImage from "@/public/images/categories/coupe.jpg";
import HatchbackImage from "@/public/images/categories/hatchback.jpg";
import ConvertibleImage from "@/public/images/categories/convertible.jpg";
import SportImage from "@/public/images/categories/sport.jpg";

export const CarIcon = {
  Suv: <TbCarSuvFilled />,
  Sedan: <FaCar />,
  Hatchback: <FaCarSide />,
  Sport: <IoCarSportSharp />,
};

export const CarModels = [
  "SUV",
  "SEDAN",
  "COUPE",
  "HATCHBACK",
  "CONVERTIBLE",
  "SPORT",
];

export const CarImage = {
  suv: SuvImage,
  sedan: SedanImage,
  coupe: CoupeImage,
  hatchback: HatchbackImage,
  convertible: ConvertibleImage,
  sport: SportImage,
};
