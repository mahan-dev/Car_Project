import React from "react";
import Image from "next/image";

import Title from "@/elements/Title";
import styles from "@/modules/styles/CarBanner/route.module.css";
import carImage from "@/public/images/carBanner/carBanner.jpg";

const CarBanner = () => {
  return (
    <div className={styles.container}>
      <Title title="Beyond the limit" />

      <div className={styles.container__content}>
        <div className={styles.container__left}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
            perferendis commodi illum reiciendis, alias pariatur. Ab, quidem
            pariatur ullam temporibus velit, impedit corrupti modi quasi
            voluptas voluptatem inventore distinctio sequi. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit. Odio perferendis commodi
            illum reiciendis, alias pariatur. Ab, quidem pariatur ullam
            temporibus velit, impedit corrupti modi quasi voluptas voluptatem
            inventore distinctio sequi. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Odio perferendis commodi illum reiciendis, alias
            pariatur. Ab, quidem pariatur ullam temporibus velit, impedit
            corrupti modi quasi voluptas voluptatem inventore distinctio sequi.
          </p>
        </div>

        <div className={styles.container__right}>
          <Image src={carImage} alt="" fill style={{ objectFit:"cover" }}/>
        </div>
      </div>
    </div>
  );
};

export default CarBanner;
