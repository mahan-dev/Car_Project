import React, { MouseEvent } from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";

export const onClickHandler = (
  e: MouseEvent<HTMLDivElement>,
  toggleRef: React.RefObject<{ [key: string]: HTMLDivElement | null }>
) => {
  const name = e.currentTarget.dataset.name;
  if (!name) return;
  const ref = toggleRef.current[name];
  console.log(ref);
  if (!ref) return;
  ref.classList.toggle(styles.open__item);
  ref.classList.toggle(styles.close__item);
};
