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

interface MarketPlaceInterface {
  profile: FetcherResponse[];
}

const MarketPlace = ({ profile }: MarketPlaceInterface) => {
  const [page, setPage] = useState<number>(1);
  const [price, setPrice] = useState<number[]>([0, 0]);

  const { totalPage, cars } = pageHandler({ page, carData: profile });

  const filteredCars: FetcherResponse[] | { data: FetcherResponse[] } =
    filterCards(price, cars);

  useEffect(() => {}, [price]);
  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  return (
    <section className={styles.container}>
      {!!cars.length ? (
        <div className={styles.container__main}>
          <aside className={styles.main__aside}>
            <MarketPlaceAside setPrice={setPrice} />
          </aside>
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
