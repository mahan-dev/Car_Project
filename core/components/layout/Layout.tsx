"use client";
import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import Image from "next/image";
import styles from "@/layout/styles/layout.module.css";

import { Button, Container } from "@mui/material";
import steeringWheel from "@/images/steering-wheel.svg";
import { RiAccountBoxFill } from "react-icons/ri";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { data } = useSession();

  return (
    <Container>
      <header className={styles.header}>
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

        <div className={styles.header__right}>
          <Button href="/marketplace">Marketplace</Button>
          <Button href="/show-room">Showroom</Button>

          <input type="text" placeholder="search" />
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <ul>
          <li>About-us</li>
          <li>adv-services</li>
          <li>agencies</li>
        </ul>

        <p> &copy; All copy rights reserved to Auto - Car </p>
      </footer>
    </Container>
  );
};

export default Layout;
