import React, { Dispatch, RefObject, SetStateAction } from "react";

import styles from "@/modules/styles/roomCard/route.module.css";
interface ClickProps {
  e: MouseEvent | React.MouseEvent;
  isClicked: boolean;
  asideRef: RefObject<HTMLElement>;
  setIsClicked: Dispatch<SetStateAction<boolean>>;
}
export const clickOutside = async ({
  e,
  isClicked,
  asideRef,
  setIsClicked,
}: ClickProps) => {
  if (!isClicked) return;
  if (!asideRef.current) return;

  if ((e.target as HTMLElement).closest("a")) {
    await new Promise((resolver) => setTimeout(resolver, 400));
    setIsClicked(false);
  }
  if (asideRef.current && !asideRef.current.contains(e.target as HTMLElement)) {
    setIsClicked(false);
    console.log("hello");
    asideRef.current.classList.toggle(styles["show-aside"]);
    asideRef.current.classList.toggle(styles["hide-aside"]);
  }
};
