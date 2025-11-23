import React, {
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
} from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";
import { FaFilter } from "react-icons/fa6";
import { Button, Slider } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import GearBoxAside from "@/modules/GearBoxAside";
import ButtonReset from "@/elements/ButtonReset";

interface AsideProps {
  setPrice: Dispatch<SetStateAction<number[]>>;
  setGearBox: Dispatch<SetStateAction<string>>;
  asideVisible: boolean;
  setReset: Dispatch<SetStateAction<boolean>>;
}

const MarketPlaceAside = ({
  setPrice,
  setGearBox,
  asideVisible,
  setReset,
}: AsideProps) => {
  const [range, setRange] = useState<number[]>([0, 1000000]);
  const [value, setValue] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [toggle, setToggle] = useState<{ [key: string]: boolean }>({});

  const changeHandler = (event: Event, newValue: number[]) => {
    if (Array.isArray(newValue)) {
      setRange(newValue);
      setPrice(range);
      setIsDisabled(false);
    }
  };

  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
    setGearBox(value);
    setIsDisabled(false);
  };

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    const name = e.currentTarget.dataset.name;
    setToggle((prev) => ({
      ...prev,
      [name]: prev[name] ? !prev[name] : true,
    }));
  };

  const resetHandler = () => {
    setValue("");
    setPrice([0, 0]);
    setRange([0, 1000000]);
    setReset(true);
    setIsDisabled(true);
  };

  return (
    <ul className={`${asideVisible ? styles.list__visible : styles.list}`}>
      <li className={styles.list__item}>
        <FaFilter />
        Filter
      </li>

      <li className={styles.list__item}>
        <div
          className={styles.list__item__header}
          data-name="price"
          onClick={clickHandler}
        >
          Price Range
          <KeyboardArrowDownRoundedIcon />
        </div>
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

      <li className={styles.list__item}>
        <div
          className={styles.list__item__header}
          data-name="gearBox"
          onClick={clickHandler}
        >
          GearBox
          <KeyboardArrowDownRoundedIcon />
        </div>
        <div
          className={toggle.gearBox ? styles.open__item : styles.close__item}
        >
          <GearBoxAside value={value} onChange={selectHandler} />
        </div>
      </li>
      <li>
        <ButtonReset onClick={resetHandler} disabled={isDisabled} />
      </li>
    </ul>
  );
};

export default MarketPlaceAside;
