"use client";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { dataFetcher } from "@/helper/dataFetcher";

import styles from "@/templates/styles/showRoom/route.module.css";
import RoomCard from "@/modules/RoomCard";
import { Pagination } from "@mui/material";
import { pageHandler } from "@/app/helper/carPerPage";

const ShowRoomPage = () => {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ["Cars"],
    queryFn: async () => await dataFetcher(),
  });

  const { totalPage } = pageHandler({ page, data });

  const paginationHandler = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    if (value < page) {
      setPage((prev) => prev - 1);
    } else if (value > page) {
      setPage((prev) => prev + 1);
    }
  };

  return (
    <div className={styles.container}>
      {!data && (
        <p style={{ minHeight: "100vh", textAlign: "center" }}>
          something went wrong
        </p>
      )}
      {data && <RoomCard page={page} data={data} />}

      <div className={styles.container__footer}>
        <Pagination
          count={totalPage}
          defaultPage={1}
          siblingCount={0}
          boundaryCount={2}
          onChange={(e, value) => paginationHandler(e, value)}
        />
      </div>
    </div>
  );
};

export default ShowRoomPage;
