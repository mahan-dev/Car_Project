"use client";
import React, { useEffect, useRef, useState } from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import RoomCard from "@/modules/RoomCard";
import styles from "@/templates/styles/marketPlace/route.module.css";
import { Pagination, Typography } from "@mui/material";
import { pageHandler } from "@/helper/carPerPage";
import { paginationHandler } from "@/helper/paginationHandler";
import { initialPage } from "@/helper/initialPage";
import MarketPlaceAside from "@/modules/MarketPlaceAside";
import { filterCards } from "@/helper/filterCard";
import FilterListRoundedIcon from "@mui/icons-material/FilterListRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { clickHandler } from "@/helper/MarketClickHandler";

interface MarketPlaceInterface {
  profile: FetcherResponse[];
}

type FilteredCars = FetcherResponse[] | { data: FetcherResponse[] };

const MarketPlace = ({ profile }: MarketPlaceInterface) => {
  //! States
  const [page, setPage] = useState<number>(1);
  const [price, setPrice] = useState<number[]>([0, 0]);

  const [debounce, setDebounce] = useState<number[]>([0, 0]);
  const [asideVisible, setAsideVisible] = useState<boolean>(false);
  //! States

  const asideContentRef = useRef<HTMLDivElement>(null);
  const { totalPage, cars } = pageHandler({ page, carData: profile });

  useEffect(() => {
    window.addEventListener("mousedown", listener);
    return () => window.removeEventListener("mousedown", listener);
  }, [asideVisible]);

  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  useEffect(() => {
    debounceHandler();
  }, [price]);

  const debounceHandler = () => {
    const timer = setTimeout(() => {
      setDebounce(price);
    }, 600);

    return () => clearTimeout(timer);
  };

  const asideHandler = () => {
    const status = !asideVisible;
    setAsideVisible(status);
    document.body.style.overflow = status ? "hidden" : "auto";
  };

  const listener = (e: MouseEvent) =>
    clickHandler({ e, asideVisible, asideContentRef, setAsideVisible });

  const filteredCars: FilteredCars = filterCards({ debounce, cars });
  return (
    <section className={styles.container}>
      <div className={styles.container__main}>
        <aside
          className={`${
            asideVisible ? styles.show__aside : styles.main__aside
          }`}
        >
          <div
            style={{ display: asideVisible ? "block" : "" }}
            ref={asideContentRef}
          >
            <MarketPlaceAside
              profile={profile}
              setPrice={setPrice}
              asideVisible={asideVisible}
            />
          </div>
        </aside>

        <div className={styles.main__filter} onClick={asideHandler}>
          {!asideVisible ? <FilterListRoundedIcon /> : <CloseRoundedIcon />}
        </div>
        {!!filteredCars.length && (
          <div className={styles.container__content}>
            <RoomCard data={filteredCars} page={1} />
            <div className={styles.container__pagination}>
              <Pagination
                count={totalPage}
                page={page}
                siblingCount={0}
                boundaryCount={2}
                onChange={(event, value) => paginationHandler(setPage, value)}
              />
            </div>
          </div>
        )}
        {!filteredCars.length && (
          <Typography
            sx={{
              width: "100%",

              display: "flex",
              justifyContent: "center",
              fontSize: "1.3rem",
              fontWeight: "600",
            }}
            variant="h2"
          >
            {" "}
            nothing found 🙁
          </Typography>
        )}
      </div>
    </section>
  );
};

export default MarketPlace;
