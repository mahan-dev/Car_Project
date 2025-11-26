import React, { Dispatch, SetStateAction } from "react";
import styles from "@/modules/styles/marketPlaceAside/route.module.css";

interface ResetProps {
  setValue: Dispatch<SetStateAction<string>>;
  setPrice: Dispatch<SetStateAction<number[]>>;
  setRange: Dispatch<SetStateAction<number[]>>;
  setGearBox: Dispatch<SetStateAction<string>>;
  setIsDisabled: Dispatch<SetStateAction<boolean>>;
  toggleRef: React.RefObject<{ [key: string]: HTMLDivElement | null }>;
}
export const resetHandler = ({
  setValue,
  setPrice,
  setRange,
  setGearBox,
  setIsDisabled,
  toggleRef,
}: ResetProps) => {
  setValue("");
  setPrice([0, 0]);
  setRange([0, 1000000]);
  setGearBox("");
  setIsDisabled(true);

  Object.values(toggleRef.current).map((ref) => {
    if (ref) {
      ref.classList.remove(styles.open__item);
      ref.classList.add(styles.close__item);
    }
  });
};
