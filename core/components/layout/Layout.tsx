"use client";
import React from "react";

import { useSession } from "next-auth/react";

import styles from "@/layout/styles/layout.module.css";

import { Container } from "@mui/material";
import Header from "@/elements/Header";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  const { data } = useSession();

  return (
    <Container>
      <header className={styles.header}>
        <Header data={data} />
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
