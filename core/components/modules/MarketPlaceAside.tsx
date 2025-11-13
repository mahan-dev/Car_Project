import React from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";
import { FaFilter } from "react-icons/fa6";

const MarketPlaceAside = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.list__item}>
        <FaFilter />
        Filter
      </li>
      
    </ul>
  );
};

export default MarketPlaceAside;
