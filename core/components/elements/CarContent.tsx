import React from "react";
import { dataHandler } from "@/helper/carContent";

import styles from "@/elements/styles/carContent/route.module.css";
import { objectHelper } from "@/app/helper/carDetail";

interface CarProps {
  data: { [key: string]: string };

  title: "specification" | "performance";
}
const CarContent = ({ data, title }: CarProps) => {
  const { carDetail } = dataHandler({
    data,
  });

  const selectData = carDetail[0][title];
  return (
    <div className={styles.container__details}>
      {Object.entries(selectData).map(([key, value]) => (
        <div key={key} className={styles.box__content}>
          <p>{key}</p>
          <p> {objectHelper(value)}</p>
        </div>
      ))}
    </div>
  );
};

export default CarContent;
