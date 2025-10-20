import Image from "next/image";
import React from "react";

import styles from "@/templates/styles/carDetailsPage/route.module.css";

import CarDetail from "../modules/CarDetail";

interface CarDetails {
  data: { [key: string]: string };
}

const CarDetailsPage = ({ data }: CarDetails) => {
  const { model_name, model_make_id, make_country, make_display } = data;

  return (
    <div className={styles.container}>
      <div className={styles["container__wrapper-image"]}>
        <Image
          src={`/images/showRoom/${model_make_id}.jpg`}
          fill
          alt={model_name}
          style={{ objectFit: "cover" }}
        />
      </div>

      <CarDetail data={data} />
    </div>
  );
};

export default CarDetailsPage;
