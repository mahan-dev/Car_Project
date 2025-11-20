"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import styles from "@/layout/styles/layout.module.css";

interface SearchProps {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const SearchBox = ({ changeHandler, value, open, setOpen }: SearchProps) => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousedown", clickHandler);
    return () => window.removeEventListener("mousedown", clickHandler);
  }, [open]);

  const clickHandler = (e: MouseEvent) => {
    if (!open) return;
    const target = e.target as Node;
    if (searchRef.current && !searchRef.current.contains(target)) {
      setOpen(false);
    }
  };
  return (
    <div
      className={styles["right__search-container"]}
      ref={searchRef}
      style={{
        display: open ? "block" : "none",
      }}
    >
      <input
        type="text"
        placeholder="search..."
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
