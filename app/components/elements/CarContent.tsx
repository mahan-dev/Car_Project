import React from "react";
import { dataHandler } from "@/helper/carContent";

import styles from "@/elements/styles/carContent/route.module.css";

interface CarProps {
  data: { [key: string]: string };
}
const CarContent = ({ data }: CarProps) => {
  const dataDetail = dataHandler({ data });

  return (
    <div className={styles.container__details}>
      {Object.entries(dataDetail).map(([key, value]) => (
        <div key={key} className={styles.box__content}>
          <p>{key}</p>
          <p>{value}</p>
        </div>
      ))}
    </div>
  );
};

export default CarContent;
