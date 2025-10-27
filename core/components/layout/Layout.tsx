"use client";
import React from "react";
import Image from "next/image";
import styles from "@/layout/styles/layout.module.css";
import { Button, Container } from "@mui/material";
import steeringWheel from "@/images/steering-wheel.svg";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Link style={{ display: "flex" }} href={"/"}>
            <Image src={steeringWheel} width={20} height={20} alt="" />
          </Link>
          <Button
            href="/signin"
            sx={{ color: "white", bgcolor: "black", padding: "0.1rem 0.8rem" }}
          >
            Sign in
          </Button>
        </div>

        <div className={styles.header__right}>
          <Button sx={{ color: "black" }} href="/show-room">
            Gallery
          </Button>

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
