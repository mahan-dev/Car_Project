import React from "react";
import { dataHandler } from "@/helper/carContent";

import styles from "@/elements/styles/carContent/route.module.css";
import { objectHelper } from "@/core/helper/carDetail";
import { ProfileInterface } from "@/models/interface/profileSchema";

interface CarProps {
  data: { [key: string]: string } | ProfileInterface;

  title: "specification" | "performance" ;
}
const CarContent = ({ data, title }: CarProps) => {
  const { carDetail } = dataHandler({
    data,
  });

  const selectData = carDetail[0][title];
  const specification = title === "specification";
  const { category } = data;

  return (
    <div className={styles.container__details}>
      {category && specification && (
        <div className={styles.box__content}>
          <p>Model Type</p>
          <p>{category}</p>
        </div>
      )}

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
