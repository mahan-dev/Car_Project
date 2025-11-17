"use client";
import React, { useEffect, useState } from "react";
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

interface MarketPlaceInterface {
  profile: FetcherResponse[];
}

type FilteredCars = FetcherResponse[] | { data: FetcherResponse[] };

const MarketPlace = ({ profile }: MarketPlaceInterface) => {
  const [page, setPage] = useState<number>(1);
  const [price, setPrice] = useState<number[]>([0, 0]);
  const [gearBox, setGearBox] = useState<string>("");
  const [asideVisible, setAsideVisible] = useState<boolean>(false);
  const { totalPage, cars } = pageHandler({ page, carData: profile });

  const filteredCars: FilteredCars = filterCards(price, cars, gearBox);

  const asideHandler = () => {
    setAsideVisible(!asideVisible);
    if (!asideVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  return (
    <section className={styles.container}>
      {!!cars.length ? (
        <div className={styles.container__main}>
          <aside
            className={`${
              asideVisible ? styles.show__aside : styles.main__aside
            }`}
          >
            <MarketPlaceAside
              setPrice={setPrice}
              asideVisible={asideVisible}
              setGearBox={setGearBox}
            />
          </aside>

          <div className={styles.main__filter} onClick={asideHandler}>
            {!asideVisible ? <FilterListRoundedIcon /> : <CloseRoundedIcon />}
          </div>
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
        </div>
      ) : (
        <Typography
          sx={{
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
    </section>
  );
};

export default MarketPlace;
