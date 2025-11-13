import React from "react";

import {
  CarIcon,
  CarImage,
  CarModels,
} from "@/constants/Categories/Categories";
import { LetterLowerCase } from "@/helper/LetterLowerCase";

import styles from "@/modules/styles/categories/categories.module.css";
import CategoryIcon from "@/modules/CategoryIcon";
import Image from "next/image";

type CartKey = keyof typeof CarIcon;
type CarImageKey = keyof typeof CarImage;

const Categories = () => {
  return (
    <section className={styles.container}>
      <ul>
        {CarModels.map((item) => (
          <div key={item} className={styles.container__card}>
            <Image
              sizes="100vw"
              style={{ width: "100%", height: "110px" }}
              src={CarImage[item.toLowerCase() as CarImageKey]}
              alt={item}
            />

            <li className={styles.card__listItem} key={item}>
              {item}
              {CarIcon[LetterLowerCase(item) as CartKey] ? (
                CarIcon[LetterLowerCase(item) as CartKey]
              ) : (
                <CategoryIcon item={item} />
              )}
            </li>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
