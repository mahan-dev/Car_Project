import React from "react";

import { CarIcon, CarModels } from "@/constants/Categories/Categories";
import { LetterUpperCase } from "@/app/helper/LetterUpperCase";



import styles from "@/modules/styles/categories/banner.module.css";
import CategoryIcon from "./CategoryIcon";

type CartKey = keyof typeof CarIcon;

const Categories = () => {
  return (
    <section className={styles.container}>
      <ul>
        {CarModels.map((item) => (
          <li className={styles.container__listItem} key={item}>
            {item}
            {CarIcon[LetterUpperCase(item) as CartKey] ? (
              CarIcon[LetterUpperCase(item) as CartKey]
            ) : (
              <CategoryIcon item={item} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
