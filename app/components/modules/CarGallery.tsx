import React from "react";
import styles from "@/modules/styles/cartGallery/route.module.css";
import Image from "next/image";

import { carImages } from "@/app/constants/carGallery/CarGallery";

const CarGallery = () => {
  return (
    <div className={styles.container}>

      <div className={styles.container__gallery}>
      <h3 className={styles.container__title}>Chose your dream with us , Quality matter</h3>
        {Object.entries(carImages).map(([key, value]) => (
          // <p key={item}>{item}</p>
          <div className={styles[key]} key={key}>
            <Image  src={value} alt={key} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarGallery;
