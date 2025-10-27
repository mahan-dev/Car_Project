"use client";
import React from "react";

import { IoSpeedometerOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import styles from "@/modules/styles/carDetail/route.module.css";
import CarContent from "@/elements/CarContent";
import { objectHelper } from "@/helper/carDetail";

interface CarDetail {
  data: { [key: string]: string };
}
const CarDetail = ({ data }: CarDetail) => {
  const { make_country, model_year } = data;
  return (
    <div className={styles.container}>
      <div className={styles.container__box}>
        Country
        <p>{make_country}</p>
      </div>
      <div className={styles.container__box}>
        Year
        <p>{objectHelper(model_year)}</p>
      </div>

      <h2 className={styles.container__title}>
        Specification
        <IoSpeedometerOutline />
      </h2>
      <CarContent data={data} title={"specification"} />

      <h2 className={styles.container__title}>
        Performance
        <FiSettings />
      </h2>
      <CarContent data={data} title={"performance"} />
    </div>
  );
};

export default CarDetail;
