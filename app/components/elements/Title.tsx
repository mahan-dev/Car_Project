import React from "react";
import styles from "@/elements/styles/title/route.module.css";

interface TitleProps {
  title: string;
}
const Title = ({ title }: TitleProps) => {
  return <h2 className={styles.container}>{title}</h2>;
};

export default Title;
