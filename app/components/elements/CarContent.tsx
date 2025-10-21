import React from "react";
import { dataHandler } from "@/helper/carContent";

import styles from "@/elements/styles/carContent/route.module.css";
import { objectHelper } from "@/app/helper/carDetail";
interface CarProps {
  data: { [key: string]: string };
  specification?: boolean;
  performance?: boolean;
}
const CarContent = ({ data, specification, performance }: CarProps) => {
  const { specification: specificationData, performance: performanceData } =
    dataHandler({
      data,
    });

  const titleData =
    (specification && specificationData) || (performance && performanceData);

  return (
    <div className={styles.container__details}>
      {Object.entries(titleData).map(([key, value]) => (
        <div key={key} className={styles.box__content}>
          <p>{key}</p>
          <p> {objectHelper(value)}</p>
        </div>
      ))}
    </div>
  );
};

export default CarContent;
