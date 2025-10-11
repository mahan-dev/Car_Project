import React from "react";
import Image from "next/image";
import styles from "@/layout/styles/layout.module.css";
import { Container } from "@mui/material";
import steeringWheel from "@/images/steering-wheel.svg";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
        <header className={styles.header}>
          <div className={styles.header__left}>
            <Image src={steeringWheel} width={20} height={20} alt="" />
            signIn
          </div>


            <input type="text" />

        </header>

      <main>{children}</main>

      {/* <footer>footer</footer> */}
    </Container>
  );
};

export default Layout;
