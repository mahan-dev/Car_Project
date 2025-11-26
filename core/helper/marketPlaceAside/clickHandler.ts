import { MouseEvent, RefObject } from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";

export const onClickHandler = (
  e: MouseEvent<HTMLDivElement>,
  toggleRef: RefObject<{ [key: string]: HTMLDivElement | null }>
) => {
  const name = e.currentTarget.dataset.name;
  if (!name) return;

  const ref = toggleRef.current[name];
  if (!ref) return;

  ref.classList.toggle(styles.open__item);
  ref.classList.toggle(styles.close__item);
};
