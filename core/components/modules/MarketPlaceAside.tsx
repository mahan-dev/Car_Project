"use client";
import React, {
  ChangeEvent,
  MouseEvent,
  Dispatch,
  SetStateAction,
  useState,
  useRef,
  useEffect,
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
import { useForm } from "react-hook-form";
import SearchParamsHandler from "@/helper/searchParamsHandler";
import { AsideUseForm } from "@/helper/marketPlaceAside/asideUseForm";
import { useRouter, useSearchParams } from "next/navigation";
import { FetcherResponse } from "@/helper/dataFetcher";
import { filterCards } from "@/core/helper/filterCard";
import { filterKeys } from "@/constants/marketPlaceAside/constants";

interface AsideProps {
  profile: FetcherResponse[];
  asideVisible: boolean;
}

export interface FormFields {
  gearBox: string;
  category: string;
  debounceValue: number[];
  range: number[];
  priceRange: number[];
}

const MarketPlaceAside = ({ profile, asideVisible }: AsideProps) => {
  const { defaultValues } = AsideUseForm();
  const { watch, setValue, reset } = useForm({
    defaultValues,
  });

  const inputData = watch();

  const searParams = useSearchParams();

  const isFilter = filterKeys.some((item) => searParams.get(item));

  const [isDisabled, setIsDisabled] = useState<boolean>(!isFilter);

  const toggleRef = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const { setParam } = SearchParamsHandler();
  const changeHandler = (
    e: ChangeEvent<HTMLInputElement>,
    newValue: number[]
  ) => {
    if (Array.isArray(newValue)) {
      setValue("priceRange", newValue); 
      setIsDisabled(false);
      setParam("priceRange", newValue);
    }
  };

  const selectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    const inputName = name as keyof typeof inputData;

    setValue(inputName, value);
    setParam(inputName, value);

    setIsDisabled(false);
  };

  const clickHandler = (e: MouseEvent<HTMLDivElement>) => {
    onClickHandler(e, toggleRef);
  };

  const router = useRouter();
  const onReset = () => {
    reset();
    reset({
      gearBox: "",
      category: "",
      priceRange: [0, 1000000],
    });
    setIsDisabled(true);
    resetHandler({ toggleRef });
    filterCards({ finalData: profile });
    router.push("/marketplace?page=1");
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
            name="priceRange"
            value={inputData.priceRange as number[]}
            min={0}
            max={1000000}
            onChange={(_, v) => setValue("priceRange", v as number[])}
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
          <GearBoxAside value={inputData.gearBox} onChange={selectHandler} />
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
          <CarTypeAside value={inputData.category} onChange={selectHandler} />
        </div>
      </li>

      <li>
        <ButtonReset onClick={onReset} disabled={isDisabled} />
      </li>
    </ul>
  );
};

export default MarketPlaceAside;
