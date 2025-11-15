import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useRef,
  useState,
} from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";
import { FaFilter } from "react-icons/fa6";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Slider,
} from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

interface AsideProps {
  setPrice: Dispatch<SetStateAction<number[]>>;
  setGearBox: Dispatch<SetStateAction<string>>;
}

const MarketPlaceAside = ({ setPrice, setGearBox }: AsideProps) => {
  const [range, setRange] = useState<number[]>([0, 1000000]);
  const [value, setValue] = useState<string>("");
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({
    price: false,
    gearBox: false,
  });

  const changeHandler = (
    event: Event | ChangeEvent<HTMLInputElement>,
    newValue: number[]
  ) => {
    if (Array.isArray(newValue)) {
      setRange(newValue);
      setPrice(range);
    }
  };

  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    setGearBox(value);
  };

  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <FaFilter />
        Filter
      </li>

      <li
        className={styles.list__item}
        onClick={() => setToggle((prev) => ({ ...prev, price: !prev.price }))}
      >
        <span className={styles.list__item__header}>
          Price Range
          <KeyboardArrowDownRoundedIcon />
        </span>
        <div className={toggle.price ? styles.open__item : styles.close__item}>
          <Slider
            value={range}
            min={0}
            max={1000000}
            onChange={changeHandler}
            valueLabelDisplay="auto"
            getAriaLabel={() => "Price range"}
            disableSwap
          />
        </div>
      </li>

      <li
        className={styles.list__item}
        onClick={() =>
          setToggle((prev) => ({ ...prev, gearBox: !prev.gearBox }))
        }
      >
        <span className={styles.list__item__header}>
          GearBox
          <KeyboardArrowDownRoundedIcon />
        </span>
        <div className={toggle.gearBox ? styles.open__item : styles.close__item}>
          <FormControl fullWidth>
            <InputLabel id="gearBox">GearBox</InputLabel>

            <Select
              labelId="gearBox"
              id="gearBox"
              value={value}
              label="gearBox"
              onChange={selectHandler}
            >
              <MenuItem value="Automatic">Automatic</MenuItem>
              <MenuItem value="Manual">Manual</MenuItem>
            </Select>
          </FormControl>
        </div>
      </li>

      <li></li>
    </ul>
  );
};

export default MarketPlaceAside;
