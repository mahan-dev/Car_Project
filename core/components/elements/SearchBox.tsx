"use client";
import React, {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
} from "react";
import styles from "@/layout/styles/layout.module.css";
import { FetcherResponse } from "@/core/helper/dataFetcher";
import SearchResult from "./SearchResult";

interface SearchProps {
  changeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  carData: FetcherResponse[];
}

const SearchBox = ({
  changeHandler,
  value,
  open,
  setOpen,
  carData,
}: SearchProps) => {
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("mousedown", clickHandler);
    return () => window.removeEventListener("mousedown", clickHandler);
  }, [open]);

  const clickHandler = async(e: MouseEvent) => {
    if (!open) return;
    const target = e.target as Node;
    if (searchRef.current && !searchRef.current.contains(target)) {
      setOpen(false);
    }

    const liTag = target as HTMLElement;

    if (liTag.closest("li")) {
      await new Promise((resolver) => setTimeout(resolver, 200));
      setOpen(false);
    }
  };
  return (
    <>
      <div
        className={styles["right__search-container"]}
        ref={searchRef}
        style={{
          display: open ? "block" : "none",
        }}
      >
        <input
          className={styles.search}
          type="text"
          placeholder="search..."
          onChange={changeHandler}
          value={value}
        />

        {value && !!carData?.length ? <SearchResult data={carData} /> : ""}
      </div>
    </>
  );
};

export default SearchBox;
