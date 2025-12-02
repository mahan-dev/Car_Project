"use client";
import React, { useEffect, useRef, useState } from "react";

import { useSession } from "next-auth/react";

import styles from "@/layout/styles/layout.module.css";

import { Container } from "@mui/material";
import Header from "@/modules/Header";
import AsideContent from "@/modules/AsideContent";
import { clickOutside } from "@/helper/layout/clickOutside";

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

  useEffect(() => {
    document.addEventListener("mousedown", (e: MouseEvent) =>
      clickOutside({ e, isClicked, asideRef, setIsClicked })
    );
    return () =>
      removeEventListener("mousedown", (e: MouseEvent) =>
        clickOutside({ e, isClicked, asideRef, setIsClicked })
      );
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
