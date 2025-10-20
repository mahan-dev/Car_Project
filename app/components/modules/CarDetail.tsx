import React from "react";
import { IoSpeedometerOutline } from "react-icons/io5";
import styles from "@/modules/styles/carDetail/route.module.css";

interface CarDetail {
  data: { [key: string]: string };
}
const CarDetail = ({ data }: CarDetail) => {
  const {
    model_name,
    model_make_id,
    make_country,
    make_display,
    model_drive,
    model_engine_cyl,
    model_engine_cc,
    model_transmission_type,
  } = data;
  return (
    <div className={styles.container}>
      <div className={styles.container__box}>
        <p>Country</p>
        <p>{make_country}</p>
      </div>

      <h2 className={styles.container__title}>
        specification
        <IoSpeedometerOutline />
      </h2>

      <div className={styles.container__details}>
        <div className={styles.box__content}>
          <p>Gear Box</p>
          <p>{model_transmission_type}</p>
        </div>

        <div className={styles.box__content}>
          <p> Model Drive</p>
          <p>{model_drive}</p>
        </div>
        <div className={styles.box__content}>
          <p> Model Cylinder </p>
          <p>{model_engine_cyl}</p>
        </div>
        <div className={styles.box__content}>
          <p> Motor Volume </p>
          <p>{model_engine_cc} cc</p>
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
