"use client";
import React, { use, useEffect, useRef, useState } from "react";

import { useSession } from "next-auth/react";

import styles from "@/layout/styles/layout.module.css";

import { Container } from "@mui/material";
import Header from "@/core/components/modules/Header";
import AsideContent from "@/modules/AsideContent";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const { data } = useSession();

  const asideRef = useRef<HTMLElement>(null);

  const clickHandler = () => {
    setIsClicked(!isClicked);
  };
  const clickOutside = (e: MouseEvent) => {
    if (!isClicked) return;
    if (!asideRef.current) return;

    asideRef.current.classList.toggle(styles["show-aside"]);
    asideRef.current.classList.toggle(styles["hide-aside"]);

    if (asideRef.current && !asideRef.current.contains(e.target as HTMLElement))
      setIsClicked(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => removeEventListener("mousedown", clickOutside);
  }, [isClicked]);

  return (
    <Container>
      <header className={styles.header}>
        <Header data={data} isClicked={isClicked} clickHandler={clickHandler} />
      </header>

      {isClicked && (
        <aside ref={asideRef} className={styles["show-aside"]}>
          <AsideContent />
        </aside>
      )}
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
