import { FaCarSide } from "react-icons/fa6";
import { FaCar } from "react-icons/fa";
import { IoCarSportSharp } from "react-icons/io5";
import { TbCarSuvFilled } from "react-icons/tb";



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
