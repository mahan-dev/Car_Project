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
import { searchClick } from "@/core/helper/searchBoxClick";

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
    window.addEventListener("mousedown", searchClickHandler);
    return () => window.removeEventListener("mousedown", searchClickHandler);
  }, [open]);

  const searchClickHandler = (e: MouseEvent | HTMLElement) =>
    searchClick({ e, searchRef, open, setOpen });

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
