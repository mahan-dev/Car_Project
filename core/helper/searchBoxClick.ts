import { Dispatch, RefObject, SetStateAction } from "react";

interface SearchClick {
  e: MouseEvent | HTMLElement;
  searchRef: RefObject<HTMLDivElement>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
export const searchClick = async ({
  e,
  searchRef,
  open,
  setOpen,
}: SearchClick) => {
  if (!open) return;

  const target = e instanceof MouseEvent ? (e.target as HTMLElement) : e;

  if (searchRef.current && !searchRef.current.contains(target)) {
    setOpen(false);
  }

  if (target.closest("li")) {
    await new Promise((resolver) => setTimeout(resolver, 200));
    setOpen(false);
  }
};
