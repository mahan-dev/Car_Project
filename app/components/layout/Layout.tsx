"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "@/layout/styles/layout.module.css";
import { Container } from "@mui/material";
import steeringWheel from "@/images/steering-wheel.svg";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; //? wait until mounted to avoid hydration mismatch
  return (
    <Container suppressHydrationWarning={true}>
      <header className={styles.header}>
        <div className={styles.header__left}>
          <Image src={steeringWheel} width={20} height={20} alt="" />
          signIn
        </div>

        <input type="text" placeholder="search" />
      </header>

      <main>{children}</main>

      {/* <footer>footer</footer> */}
    </Container>
  );
};

export default Layout;
