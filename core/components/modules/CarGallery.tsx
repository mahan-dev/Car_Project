import React from "react";
import styles from "@/modules/styles/cartGallery/route.module.css";
import Image from "next/image";

import { carImages } from "@/core/constants/carGallery/CarGallery";
import { Button } from "@mui/material";

const CarGallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__gallery}>
        <h3 className={styles.container__title}>
          Chose your dream with us , Quality matter
        </h3>
        {Object.entries(carImages).map(([key, value]) => (
          // <p key={item}>{item}</p>
          <div className={styles[key]} key={key}>
            <Image src={value} alt={key} />
          </div>
        ))}
      </div>

      <Button
        className={styles.container__button}
        sx={{ mt: "2rem" }}
        color="primary"
        variant="outlined"
      >
        Book now
      </Button>
    </div>
  );
};

export default CarGallery;
