"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@mui/material";
import { Session } from "next-auth";
import { RiAccountBoxFill } from "react-icons/ri";
import styles from "@/layout/styles/layout.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import steeringWheel from "@/images/steering-wheel.svg";
import SearchBox from "@/elements/SearchBox";
import { useQuery } from "@tanstack/react-query";
import { SearchQuery } from "@/helper/SearchQueryFunction";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

interface HeaderProps {
  data: Session;
  isClicked: boolean;
  clickHandler: () => void;
}
const Header = ({ data, isClicked, clickHandler }: HeaderProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  const { data: fetchedData } = useQuery({
    queryKey: ["searchData", debouncedValue],
    queryFn: async () => SearchQuery(debouncedValue, value),
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, 500);

    return () => clearTimeout(timer);
  }, [value]);

  const changeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValue(value);
  };
  return (
    <>
      <div className={styles.header__left}>
        {(() => {
          console.log("rendering header");
          return null;
        })()}
        {data ? (
          <>
            <div className={styles.header__account}>
              <Link href={"/dashboard"}>
                <RiAccountBoxFill />
              </Link>
            </div>

            <div className={styles.left__menu} onClick={clickHandler}>
              {isClicked ? <IoClose /> : <IoMenu />}
            </div>
          </>
        ) : (
          <>
            <Link href={"/"}>
              <Image src={steeringWheel} width={20} height={20} alt="" />
            </Link>
            <Button href="/signin" sx={{ color: "white", bgcolor: "black" }}>
              Sign in
            </Button>
          </>
        )}
      </div>

      <div className={styles.header__right} style={{ position: "relative" }}>
        <Button href="/marketplace">Marketplace</Button>
        <Button href="/show-room">Showroom</Button>

        <Button
          sx={{
            minWidth: "20px",
            padding: "0.2rem 0.3rem",
          }}
          variant="contained"
          onClick={() => setOpen(!open)}
        >
          <SearchRoundedIcon />
        </Button>

        <SearchBox
          changeHandler={changeHandler}
          value={value}
          open={open}
          setOpen={setOpen}
          carData={fetchedData}
        />
      </div>
    </>
  );
};

export default Header;
