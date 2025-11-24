import { Dispatch, RefObject, SetStateAction } from "react";

interface ClickHandler {
  e: MouseEvent;
  asideVisible: boolean;
  asideContentRef: RefObject<HTMLDivElement>;
  setAsideVisible: Dispatch<SetStateAction<boolean>>;
}
export const clickHandler = ({
  e,
  asideVisible,
  asideContentRef,
  setAsideVisible,
}: ClickHandler) => {
  if (!asideVisible) return;
  const content = asideContentRef.current;
  const target = e.target as HTMLElement;

  const muiPopoverSelector = ".MuiPopover-root, .MuiMenu-root, .MuiMenu-paper";

  if (target.closest(muiPopoverSelector)) {
    return;
  }

  if (content && !content.contains(target)) {
    setAsideVisible(false);
    document.body.style.overflow = "auto";
  }
};
