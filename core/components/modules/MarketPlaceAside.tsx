import React, { Dispatch, SetStateAction, useState } from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";
import { FaFilter } from "react-icons/fa6";
import { Slider } from "@mui/material";

interface AsideProps {
  setPrice: Dispatch<SetStateAction<number[]>>;
}

const MarketPlaceAside = ({ setPrice }: AsideProps) => {
  const [range, setRange] = useState<number[]>([0, 1000000]); // default range

  const changeHandler = (_event: Event, newValue: number[]) => {
    if (Array.isArray(newValue)) {
      setRange(newValue);
    }
    setPrice(range);
  };

  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <FaFilter />
        Filter
      </li>

      <Slider
        value={range}
        min={0}
        max={1000000}
        onChange={changeHandler}
        valueLabelDisplay="auto"
        getAriaLabel={() => "Price range"}
        disableSwap
      />
    </ul>
  );
};

export default MarketPlaceAside;
