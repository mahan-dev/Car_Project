"use client";
import React, {
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
} from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";
import { FaFilter } from "react-icons/fa6";
import { Slider } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import GearBoxAside from "@/core/components/elements/GearBoxAside";
import ButtonReset from "@/elements/ButtonReset";
import { onClickHandler } from "@/helper/marketPlaceAside/clickHandler";
import { resetHandler } from "@/helper/marketPlaceAside/resetHandler";
import CarTypeAside from "@/elements/CarTypeAside";
import { useSearchParams } from "next/navigation";

interface AsideProps {
  price: number[];
  setPrice: Dispatch<SetStateAction<number[]>>;
  setGearBox: Dispatch<SetStateAction<string>>;
  asideVisible: boolean;
}

const MarketPlaceAside = ({
  setPrice,
  setGearBox,
  asideVisible,
}: AsideProps) => {
  const searchParams = useSearchParams();
  const gearBoxUrl = searchParams.get("gearBox") || "";
  const carTypeUrl = searchParams.get("category") || "";
  const [range, setRange] = useState<number[]>([0, 1000000]);
  const [value, setValue] = useState<string>(gearBoxUrl);
  const [type, setType] = useState<string>(carTypeUrl);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const toggleRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const changeHandler = (_event: Event, newValue: number[]) => {
    if (Array.isArray(newValue)) {
      setPrice(newValue);
      setIsDisabled(false);
    }
  };

  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setType(type);
    setValue(value);
    setGearBox(value);
    setIsDisabled(false);
  };

  const carTypeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setType(value);
  };

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    onClickHandler(e, toggleRef);
  };

  const onReset = () => {
    resetHandler({
      setValue,
      setPrice,
      setRange,
      setGearBox,
      setIsDisabled,
      toggleRef,
    });
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
        <div
          ref={(el) => {
            toggleRef.current["price"] = el;
          }}
          className={styles.close__item}
        >
          <Slider
            value={range}
            min={0}
            max={1000000}
            onChange={(e, v) => setRange(v as number[])}
            onChangeCommitted={changeHandler}
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
          ref={(el) => {
            toggleRef.current["gearBox"] = el;
          }}
          className={styles.close__item}
        >
          <GearBoxAside value={value} onChange={selectHandler} />
        </div>
      </li>

      <li className={styles.list__item}>
        <div
          className={styles.list__item__header}
          data-name="type"
          onClick={clickHandler}
        >
          Car Type
          <KeyboardArrowDownRoundedIcon />
        </div>
        <div
          ref={(el) => {
            toggleRef.current["type"] = el;
          }}
          className={styles.close__item}
        >
          <CarTypeAside value={type} onChange={carTypeHandler} />
        </div>
      </li>

      <li>
        <ButtonReset onClick={onReset} disabled={isDisabled} />
      </li>
    </ul>
  );
};

export default MarketPlaceAside;
