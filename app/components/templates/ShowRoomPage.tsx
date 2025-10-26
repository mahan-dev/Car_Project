"use client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import styles from "@/templates/styles/showRoom/route.module.css";
import { Pagination } from "@mui/material";

import RoomCard from "@/modules/RoomCard";
import RoomAside from "@/modules/RoomAside";

import { dataFetcher } from "@/helper/dataFetcher";
import { pageHandler } from "@/helper/carPerPage";
import { paginationHandler } from "@/helper/paginationHandler";
import { initialPage } from "@/helper/initialPage";
import Loader from "@/loader/Loader";

const ShowRoomPage = () => {
  const [page, setPage] = useState(1);

  const { data, isFetching, isError } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => await dataFetcher(),
  });

  const { totalPage } = pageHandler({ page, data });

  useEffect(() => {
    initialPage(page, setPage);
  }, [page]);

  return (
    <div className={styles.container}>
      {isFetching && (
        <div className={styles.container__loader}>
          <Loader />
        </div>
      )}
      {isError && !isFetching && (
        <p className={styles.container__error}>something went wrong</p>
      )}
      <div className={styles.main}>
        {data && (
          <>
            <aside className={styles.main__aside}>
              <RoomAside />
            </aside>
            <RoomCard page={page} data={data} />
          </>
        )}
      </div>

      <div className={styles.container__footer}>
        {data && (
          <Pagination
            count={totalPage}
            page={page}
            siblingCount={0}
            boundaryCount={2}
            onChange={(event, value) => paginationHandler(page, setPage, value)}
          />
        )}
      </div>
    </div>
  );
};

export default ShowRoomPage;
