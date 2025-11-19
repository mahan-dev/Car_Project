import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@mui/material";
import { Session } from "next-auth";
import { RiAccountBoxFill } from "react-icons/ri";
import styles from "@/layout/styles/layout.module.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import steeringWheel from "@/images/steering-wheel.svg";

interface HeaderProps {
  data: Session;
}
const Header = ({ data }: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const searchHandler = (e: MouseEvent) => {
    if (!open) return;
    const target = e.target as Node;
    if (searchRef.current && !searchRef.current.contains(target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("mousedown", searchHandler);
    return () => window.removeEventListener("mousedown", searchHandler);
  }, [open]);

  return (
    <>
      <div className={styles.header__left}>
        {data ? (
          <>
            <Link href={"/dashboard"}>
              <RiAccountBoxFill className={styles.header__account} />
            </Link>
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

        <div
          className={styles["right__search-container"]}
          ref={searchRef}
          style={{
            display: open ? "block" : "none",
          }}
        >
          <input type="text" placeholder="search..." />
        </div>
      </div>
    </>
  );
};

export default Header;
