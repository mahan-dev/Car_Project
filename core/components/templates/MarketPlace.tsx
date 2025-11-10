"use client";
import React, { useEffect, useState } from "react";
import { FetcherResponse } from "@/helper/dataFetcher";
import RoomCard from "@/modules/RoomCard";
import styles from "@/templates/styles/marketPlace/route.module.css";
import { Pagination, Typography } from "@mui/material";
import { pageHandler } from "@/helper/carPerPage";
import { paginationHandler } from "@/helper/paginationHandler";
import { initialPage } from "@/helper/initialPage";

interface MarketPlaceInterface {
  profile: FetcherResponse[];
}

const MarketPlace = ({ profile }: MarketPlaceInterface) => {
  const [page, setPage] = useState<number>(1);

  const { totalPage, cars } = pageHandler({ page, carData: profile });

  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  return (
    <section className={styles.container}>
      {!!cars.length ? (
        <>
          <RoomCard data={cars} page={1} />

          <div className={styles.container__pagination}>
            <Pagination
              count={totalPage}
              page={page}
              siblingCount={0}
              boundaryCount={2}
              onChange={(event, value) => paginationHandler(setPage, value)}
            />
          </div>
        </>
      ) : (
        <Typography
          sx={{ display: "flex", justifyContent: "center", fontSize: "1.3rem" }}
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
